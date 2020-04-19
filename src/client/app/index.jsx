import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import StyleContext from 'isomorphic-style-loader/StyleContext';
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
  const insertCss = (...styles) => {
    const removeCss = styles.map((style) => style._insertCss()); // 客户端执行，插入style
    return () => removeCss.forEach((dispose) => dispose()); //组件卸载时 移除当前的 style 标签
  };
  // 渲染index
  ReactDOM.hydrate(
    <StyleContext.Provider value={{ insertCss }}>
      <Root />
    </StyleContext.Provider>
    , document.getElementById('root'));
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
      route
        .component()
        .props.load()
        .then((res) => {
          // 异步组件加载完成后再渲染页面
          console.log('异步组件加完成');
          // 加载完成再执行 dom 挂载
          renderDom();
        });
    } else {
      renderDom();
    }
  } else {
    renderDom();
  }
}

clientRender();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}
