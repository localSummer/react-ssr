import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from '../../client/router';
import routeList, { matchRoute } from '../../client/router/route-config';

export default async (ctx, next) => {
  const path = ctx.request.path; // 等同于 ctx.req.url

  // /favicon.ico 特别处理
  if (path.indexOf('.') > -1) {
    ctx.body = null;
    return next();
  }

  console.log('ctx.request.path.', ctx.request.path);

  // 查找到目标路由对象
  let targetRoute = matchRoute(path, routeList);

  // 数据预取
  let fetchDataFn = targetRoute.component.getInitialProps;
  let fetchResult = {};

  if (fetchDataFn) {
    fetchResult = await fetchDataFn();
  }

  // 将预取数据在这里传递进去，组内通过props.staticContext获取
  const context = {
    initialData: fetchResult,
  };

  const html = renderToString(
    <StaticRouter location={path} context={context}>
      <App routeList={routeList} />
    </StaticRouter>
  );

  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <title>my react ssr</title>
      <meta name="keyword" content="关键词内容"/>
      <meta name="description" content="描述内容"/>
    </head>
    <body>
      <div id="root">${html}</div>
      <textarea id="ssrTextInitData" style="display:none;">
        ${JSON.stringify(fetchResult)}
      </textarea>
      <script type="text/javascript" src="index.js"></script>
    </body>
    </html>
  `;

  await next();
};
