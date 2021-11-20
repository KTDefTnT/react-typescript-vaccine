import { connect } from 'umi';
import { ConnectProps } from '@/@types/connect';
import BottomNav from '@/components/BottomNav';
import { NavBar, Icon } from 'antd-mobile';
import './index.scss';

import routes from '@/router/routes.config.js';
import { getRouteByPath } from '@/core/utils/util';

interface BasicLayoutProps extends ConnectProps {
  rightContent: string;
  match: Object;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children, location }) => {
  const pathname = location?.pathname;
  const route = getRouteByPath(routes, pathname);

  const handleLeftClick = () => {
    history.back();
  };
  return (
    <div className="container">
      {!route?.hiddenNav && (
        <NavBar
          mode="light"
          leftContent={<Icon type="left" />}
          onLeftClick={handleLeftClick}
        >
          {route?.title}
        </NavBar>
      )}
      <section>{children}</section>
      <footer>
        {pathname !== '/login' && <BottomNav pathname={pathname} />}
      </footer>
    </div>
  );
};

// 将 location，history等路由信息注入到props上
export default connect()(BasicLayout);
