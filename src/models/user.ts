import { MsgType } from '@/core/constant';
import { UserModelType } from '@/@types/user';
import { getUserInfo } from '@/services/user';

const userModel: UserModelType = {
  namespace: 'user',
  state: {
    userInfo: {
      name: '',
      icon: '',
      userId: '',
      phone: '',
    },
  },
  effects: {
    *getUserInfo(action, { call, put }) {
      const resp = yield call(getUserInfo);
      let userInfo =
        resp.status === MsgType.SUCCESS
          ? resp.data
          : {
              name: '',
              icon: '',
              userId: '',
              phone: '',
            };
      console.log('user', userInfo);
      yield put({
        type: 'saveUser',
        payload: { userInfo },
      });
    },
  },
  reducers: {
    saveUser(state, action) {
      console.log('action', action.payload);
      return { ...state, ...action.payload };
    },
  },
};

export default userModel;
