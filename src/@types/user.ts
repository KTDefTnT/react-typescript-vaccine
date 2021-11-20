import { Effect, Reducer } from 'umi';

export interface UserInfoState {
  name: string;
  icon: string;
  userId: string;
  phone: string;
}

// 当前model注入到connect中的数据类型
export interface UserModelState {
  userInfo: UserInfoState;
}

// 当前model
export interface UserModelType {
  namespace: String;
  state: {
    userInfo: UserInfoState;
  };
  effects: {
    getUserInfo: Effect;
  };
  reducers: {
    saveUser: Reducer;
  };
}
