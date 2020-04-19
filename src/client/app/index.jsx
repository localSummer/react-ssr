import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import App from '../router';
import routeList, { matchRoute } from '../router/route-config';
import proConfig from '../../share/pro-config';

const Root = hot(() => (
  <Router>
    <App routeList={routeList} />
  </Router>
));

//提取出挂载到 dom 方法
function renderDom() {
  // 渲染index
  ReactDOM.hydrate(<Root />, document.getElementById('root'));
}

function clientRender() {
  // 初始数据只有首页有
  let initialData = JSON.parse(
    document.getElementById('ssrTextInitData').value
  );

  window.__INITIAL_DATA__ = initialData;

  // 查找路由
  let route = matchRoute(document.location.pathname, routeList);
  if (route) {
    if (route.component[proConfig.asyncComponentKey]) {
      route.component().props.load().then(res => {
        // 异步组件加载完成后再渲染页面
        console.log('异步组件加完成');
        // 加载完成再执行 dom 挂载    
        renderDom();
      })
    } else {
      renderDom()
    }
  } else {
    renderDom();
  }
}

clientRender();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
