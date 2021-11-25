import { Component } from 'react';
import { connect, Redirect } from 'umi';
import { ConnectProps, ConnectState } from '@/@types/connect';
import { UserModelState } from '@/@types/user';

interface SecurityLayoutProps extends ConnectProps {
  user: UserModelState;
}

class SecurityLayout extends Component<SecurityLayoutProps, ConnectState> {
  render() {
    console.log('SecurityLayout', this.props);
    const { children, user } = this.props;
    const { userId } = user.userInfo;
    const isLogin = !!userId;

    return (
      <div>
        {isLogin ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: location.pathname } }}
          />
        )}
      </div>
    );
  }
}

// connect-> 将store挂载到props上
export default connect(({ user }: ConnectState) => ({ user }))(SecurityLayout);
