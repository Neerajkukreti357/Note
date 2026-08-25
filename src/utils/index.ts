export const getCurrentRouteName = (state: any): string => {
  const route = state.routes[state.index];

  if (route.state) {
    return getCurrentRouteName(route.state);
  }

  return route.name;
};
