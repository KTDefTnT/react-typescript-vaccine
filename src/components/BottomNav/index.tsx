import { connect, history } from 'umi';
import { TabBar } from 'antd-mobile';
import SvgIcon from '@/components/SvgIcon';
import './index.scss';

const menu = [
  {
    name: '首页',
    icon: 'home',
    link: '/home',
  },
  {
    name: '机构',
    icon: 'organ',
    link: '/organ',
  },
  {
    name: '消息',
    icon: 'message',
    link: '/message',
  },
  {
    name: '我的',
    icon: 'mine',
    link: '/mine',
  },
];

interface BottomNavProps {
  pathname?: String;
}

const BottomNav: React.FC<BottomNavProps> = ({ pathname }) => {
  return (
    <TabBar
      tintColor="#1fc7b0"
      unselectedTintColor="#d2d3d7"
      className="tab-container"
    >
      {menu.map(({ name, icon, link }) => (
        <TabBar.Item
          key={link}
          title={name}
          icon={<SvgIcon iconName={icon} />}
          selectedIcon={<SvgIcon iconName={`active_${icon}`} />}
          selected={pathname === link}
          onPress={() => {
            history.push(link);
          }}
        />
      ))}
    </TabBar>
  );
};

export default connect()(BottomNav);
