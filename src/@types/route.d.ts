export interface RoutesState {
  path: string;
  component: string;
  title?: string;
  hiddenNav?: boolean;
  routes?: RoutesState[];
}
