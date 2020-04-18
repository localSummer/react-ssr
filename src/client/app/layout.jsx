import React from 'react'
import { Link } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Link to="/index">首页</Link>
        <Link to="/list">列表页</Link>
        <div>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}

export default Layout;
