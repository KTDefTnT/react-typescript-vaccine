import { ConnectProps } from '@/@types/connect';
import { LoginParams } from '@/@types/login';
import { Component } from 'react';
import styles from './index.scss';

import LoginForm from './LoginForm';
import { history, connect } from 'umi';

interface LoginProps extends ConnectProps {}

class Login extends Component<LoginProps> {
  handleSubmit = async (value: LoginParams) => {
    const { dispatch, location } = this.props;
    const from = location?.state.from;
    console.log('form', from);
    // 正常是需要使用登录 获取用户信息
    await dispatch({ type: 'user/getUserInfo' });
    history.push('/home');
  };

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.logo}></div>
        <LoginForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect()(Login);
