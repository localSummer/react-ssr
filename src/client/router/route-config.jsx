import React from 'react';
import { matchPath } from 'react-router';
import AsyncLoader from './async-loader';

function pageNotFound() {
  return <div>404页面</div>;
}

const routeList = [
  {
    path: ['/', '/index'],
    component: AsyncLoader(() => import(/*webpackChunkName:"chunk-index"*/'../pages/Index')),
    exact: true,
  },
  {
    path: '/list',
    component: AsyncLoader(() => import(/*webpackChunkName:"chunk-list"*/'../pages/List')),
    exact: true,
  },
  {
    path: '*',
    component: pageNotFound,
    exact: true,
  },
];

export default routeList;

export const matchRoute = (path, routeList) => {
  let route;
  for (let item of routeList) {
    if (matchPath(path, item)) {
      route = item;
      break;
    }
  }

  return route;
};
