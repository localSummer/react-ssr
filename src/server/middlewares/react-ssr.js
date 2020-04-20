import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
//css 同构的上下文
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { Provider } from 'react-redux';

import getStore from '../../share/redux/store';
import Layout from '../../client/app/layout';
import routeList, { matchRoute } from '../../client/router/route-config';
import getAssets from '../common/assets';
import getStaticRoutes from '../common/get-static-routes';

// 得到静态资源
const assetsMap = getAssets();

export default async (ctx, next) => {
  const path = ctx.request.path; // 等同于 ctx.req.url

  // /favicon.ico 特别处理
  if (path.indexOf('.') > -1) {
    ctx.body = null;
    return next();
  }

  console.log('ctx.request.path.', ctx.request.path);

  // 获取静态路由
  const staticRoutesList = await getStaticRoutes(routeList);

  // 查找到目标路由对象
  let targetRoute = matchRoute(path, staticRoutesList);

  // 得到 store,默认没有数据
  const store = getStore();

  // 数据预取
  let fetchDataFn = targetRoute.component ? targetRoute.component.getInitialProps : null;
  let fetchResult = {};

  if (fetchDataFn) {
    fetchResult = await fetchDataFn({ store });
  }

  let { page } = fetchResult || {};

  let tdk = {
    title: '默认标题 - my react ssr',
    keywords: '默认关键词',
    description: '默认描述',
  };

  if (page && page.tdk) {
    tdk = page.tdk;
  }

  const css = new Set();
  const insertCss = (...styles) =>
    styles.forEach((style) => css.add(style._getContent()));
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter>
        <StyleContext.Provider value={{ insertCss }}>
          <Layout>
            <targetRoute.component
              initialData={fetchResult}
              ></targetRoute.component>
          </Layout>
        </StyleContext.Provider>
      </StaticRouter>
    </Provider>
  );

  const styles = [];
  [...css].forEach((item) => {
    let [mid, content] = item[0];
    styles.push(`<style id="s${mid}-0">${content}</style>`);
  });

  const helmet = Helmet.renderStatic();

  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${styles.join('')}
    </head>
    <body>
      <div id="root">${html}</div>
      <textarea id="ssrTextInitData" style="display:none;">
        ${JSON.stringify(fetchResult)}
      </textarea>
      ${assetsMap.js.join('')}
    </body>
    </html>
  `;

  await next();
};
