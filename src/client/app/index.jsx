import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../router';
import routeList, { matchRoute } from '../router/route-config';

const Root = () => (
  <Router>
    <App routeList={routeList} />
  </Router>
);

function clientRender() {
  // 初始数据只有首页有
  let initialData = JSON.parse(
    document.getElementById('ssrTextInitData').value
  );

  // 查找路由
  let route = matchRoute(document.location.pathname, routeList);

  // 设置组件初始化数据 [关键点]
  route.initialData = initialData;

  ReactDOM.hydrate(<Root />, document.getElementById('root'));
}

clientRender();
