import { UserModelType } from '@/@types/user';
import { getUserInfo } from '@/services/user';

const userModel: UserModelType = {
  namespace: 'user',
  state: {
    userInfo: {},
  },
  effects: {
    *getUserInfo(action, { call, put }) {
      const userInfo = yield call(getUserInfo);
      yield put({
        type: 'saveUser',
        payload: { userInfo },
      });
    },
  },
  reducers: {
    saveUser(state, action) {
      return { ...state, ...action.payload };
    },
  },
};

export default userModel;
