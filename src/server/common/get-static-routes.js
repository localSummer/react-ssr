import proConfig from '../../share/pro-config';

const checkIsAsyncRoute = (component) => {
  return component[proConfig.asyncComponentKey];
};

async function getStaticRoutes(routes) {
  const key = '__dynamics_route_to_static';
  if (global[key]) {
    return global[key];
  }

  let len = routes.length,
  i = 0;
  const staticRoutes = [];

  for (; i < len; i++) {
    let item = routes[i];
    if (checkIsAsyncRoute(item.component)) {
      staticRoutes.push({
        ...item,
        component: (await item.component().props.load()).default
      })
    } else {
      staticRoutes.push({
        ...item
      })
    }
  }

  global[key] = staticRoutes;
  return staticRoutes;
}

export default getStaticRoutes;
