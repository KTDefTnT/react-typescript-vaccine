import React from 'react';
import SvgIcon from '@/components/SvgIcon';
import { Grid } from 'antd-mobile';

import Styles from './index.scss';

const list = [
  {
    icon: 'yimiao',
    text: '宝宝疫苗',
  },
  {
    icon: 'kangti',
    text: '成人疫苗',
  },
  {
    icon: 'bingdu',
    text: '新冠疫苗',
  },
  {
    icon: 'jiankang',
    text: '入学查验',
  },
  {
    icon: 'fanghu',
    text: '健康监测',
  },
  {
    icon: 'yiyuan',
    text: '核酸监测',
  },
  {
    icon: 'jijiu',
    text: '发热监测',
  },
  {
    icon: 'yaoxiang',
    text: '免费义诊',
  },
];
interface ListProps {}

const List: React.FC<ListProps> = () => {
  return (
    <div className={Styles.container}>
      <Grid
        data={list}
        hasLine={false}
        renderItem={(dataItem) => (
          <React.Fragment>
            <div className={Styles.item}>
              <SvgIcon iconName={dataItem?.icon} size={30} />
            </div>
            <div className="text">
              <span>{dataItem?.text}</span>
            </div>
          </React.Fragment>
        )}
      />
    </div>
  );
};

export default List;
