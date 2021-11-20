import React from 'react';
import { connect, history } from 'umi';
import { Grid, WingBlank } from 'antd-mobile';
import SvgIcon from '@/components/SvgIcon';
import Girl from '@/static/img/girl.png';
import './index.scss';

const list = [
  {
    icon: 'member',
    text: '成员',
    link: '/member',
  },
  {
    icon: 'order',
    text: '预约',
  },
  {
    icon: 'service',
    text: '咨询',
  },
  {
    icon: 'setting',
    text: '设置',
  },
];
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const handleClick = (el) => {
    history.push(el?.link);
  };

  return (
    <div className="header-container">
      <div className="user">
        <img src={Girl} className="user-img"></img>
        <div className="user-info">
          <div className="user-name">焦糖瓜子</div>
          <div className="user-phone">
            136****1234
            <span className="verify">已认证</span>
          </div>
        </div>
      </div>

      <WingBlank className="tabs">
        <Grid
          data={list}
          hasLine={false}
          onClick={handleClick}
          renderItem={(dataItem) => (
            <React.Fragment>
              <SvgIcon iconName={dataItem?.icon} size={30} />
              <div className="text">
                <span className="red">{dataItem?.text}</span>
              </div>
            </React.Fragment>
          )}
        />
      </WingBlank>
    </div>
  );
};

export default connect()(Header);
