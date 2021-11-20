import React from 'react';
import SvgIcon from '@/components/SvgIcon';
import { WingBlank, Grid } from 'antd-mobile';

import './index.scss';

const list = [
  {
    icon: 'jigou',
    text: '管理机构',
  },
  {
    icon: 'kefu',
    text: '联系客服',
  },
  {
    icon: 'question',
    text: '常见FAQ',
  },
  {
    icon: 'setting',
    text: '常见问题',
  },
  {
    icon: 'notice',
    text: '设置提醒',
  },
  {
    icon: 'order',
    text: '疫苗计划',
  },
  {
    icon: 'zhishi',
    text: '疫苗知识',
  },
  {
    icon: 'phone',
    text: '咨询电话',
  },
];
interface ListProps {}

const List: React.FC<ListProps> = () => {
  return (
    <WingBlank className="list-container">
      <Grid
        data={list}
        hasLine={false}
        renderItem={(dataItem) => (
          <React.Fragment>
            <SvgIcon iconName={dataItem?.icon} size={30} />
            <div className="text">
              <span>{dataItem?.text}</span>
            </div>
          </React.Fragment>
        )}
      />
    </WingBlank>
  );
};

export default List;
