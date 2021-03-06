import { Dispatch, Location } from 'umi';
import { UserModelState } from './user';

// 全局state以及prop的定义
export interface ConnectProps {
  dispatch?: Dispatch;
  location?: Location & { state: { from: string } };
}

export interface ConnectState {
  user: UserModelState;
}
