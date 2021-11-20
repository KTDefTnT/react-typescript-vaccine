import { RoutesState } from '@/@types/route';

export const getRouteByPath = (
  routes: RoutesState[],
  pathname: string | undefined,
): RoutesState | void => {
  let resultRoute;
  if (!routes || routes.length === 0) return;
  for (let route of routes) {
    // 如果当前命中则终止
    if (route.path === pathname) {
      resultRoute = route;
      break;
    }

    // 深入递归
    resultRoute = route.routes && getRouteByPath(route?.routes, pathname);
  }
  return resultRoute;
};
