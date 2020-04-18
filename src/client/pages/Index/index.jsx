import React from 'react';
import { Helmet } from 'react-helmet';
import './index.less';

class Index extends React.Component {
  constructor(props) {
    super(props);

    const initData = props.initialData || {};
    this.state = {
      page: initData.page,
    };
  }

  static async getInitialProps() {
    return {
      page: {
        tdk: {
          title: '首页 - react ssr',
          keywords: '前端技术江湖',
          description: '关键词',
        },
      },
    };
  }

  componentDidMount() {
    if (!this.state.page) {
      Index.getInitialProps().then((res) => {
        this.setState({
          page: res.page,
        });
      });
    }
  }

  handleClick() {
    alert('一起来玩 react ssr 呀,点我有反应吗？');
  }

  render() {
    const { tdk = {} } = this.state.page || {};
    return (
      <div className="page-index-box">
        <Helmet>
          <title>{tdk.title}</title>
          <meta name="description" content={tdk.description} />
          <meta name="keywords" content={tdk.keywords} />
        </Helmet>
        <span onClick={ this.handleClick }>首页</span>
      </div>
    );
  }
}

export default Index;
