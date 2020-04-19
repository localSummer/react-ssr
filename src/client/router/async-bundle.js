import React from 'react';

function LoadingComponent(props) {
  return <div>loading......</div>;
}

/**
 * 动态加载组件一个组的容器
 *
 * @class Bundle
 * @extends {Component}
 */

class AsyncBundle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mod: null
    }
  }

  componentDidMount() {
    if (!this.state.mod) {
      this.load(this.props)
    }
  }

  load(props) {
    this.setState({
      mod: null
    })

    props.load().then((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : <LoadingComponent/>
  }
}

export default AsyncBundle;
