import React from 'react';
import { NavLink } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './layout.less';

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="layout-box">
        <h1>koa+react+ssr</h1>
        <NavLink to="/index" style={{ marginLeft: '10px' }}>
          首页
        </NavLink>
        <NavLink style={{ marginLeft: '10px' }} to="/list">
          列表页
        </NavLink>
        <NavLink style={{ marginLeft: '10px' }} to="/404">
          404页面
        </NavLink>
        {this.props.children}
      </div>
    );
  }
}
//带入路由信息
export default withStyles(styles)(Layout);
