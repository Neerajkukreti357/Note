// utils/getActiveRouteName.ts
import { NavigationState, PartialState } from '@react-navigation/native';

type State = NavigationState | PartialState<NavigationState>;

export function getActiveRouteName(state: State): string {
  const route = state.routes[state.index ?? 0];

  // Dive into nested navigators (Drawer -> Tab -> Stack, etc.)
  if (route.state) {
    return getActiveRouteName(route.state as State);
  }

  return route.name;
}
