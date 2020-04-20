import React from 'react';

let _this = null;

const popStateCallback = () => {
  if (_this && _this.getInitialProps) {
    _this.getInitialProps();
  }
};

export default (SourceComponent) => {
  return class HoComponent extends React.Component {
    constructor(props) {
      super(props);

      let initialData = props.initialData || {};
      if (!__SERVER__) {
        initialData = window.__INITIAL_DATA__ || {};
        window.__INITIAL_DATA__ = {};
      }
      this.state = {
        initialData,
        canClientFetch: false,
      };
    }

    static async getInitialProps(ctx) {
      return SourceComponent.getInitialProps
        ? await SourceComponent.getInitialProps(ctx)
        : {};
    }

    async getInitialProps() {
      const props = this.props;
      const store = window.__STORE__; // 从全局得到 store

      const res = props.getInitialData
      ? await props.getInitialData(store.dispatch)
      : SourceComponent.getInitialProps
      ? await SourceComponent.getInitialProps()
      : {};
      this.setState({
        initialData: res,
        canClientFetch: true,
      });
    }

    async componentDidMount() {
      _this = this;
      // 注册事件，用于在页面回退的时候触发
      window.addEventListener('popstate', popStateCallback);
      const canClientFetch =
        this.props.history && this.props.history.action === 'PUSH';
      if (canClientFetch) {
        await this.getInitialProps();
      }
    }

    render() {
      const props = {
        ...this.props,
        initialData: this.state.initialData
      };

      return <SourceComponent {...props} />;
    }
  };
};
