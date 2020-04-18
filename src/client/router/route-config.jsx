import { matchPath } from 'react-router';
import Index from '../pages/Index';
import List from '../pages/List';

const routeList = [
  {
    path: '/',
    component: Index,
    exact: true
  },
  {
    path: '/index',
    component: Index,
    exact: true
  },
  {
    path: '/list',
    component: List,
    exact: true
  }
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
}