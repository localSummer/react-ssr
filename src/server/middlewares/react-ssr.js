import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';

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

  // 数据预取
  let fetchDataFn = targetRoute.component.getInitialProps;
  let fetchResult = {};

  if (fetchDataFn) {
    fetchResult = await fetchDataFn();
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

  const html = renderToString(
    <StaticRouter>
      <Layout>
        <targetRoute.component
          initialData={fetchResult}
        ></targetRoute.component>
      </Layout>
    </StaticRouter>
  );

  const helmet = Helmet.renderStatic();

  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${assetsMap.css.join('')}
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
