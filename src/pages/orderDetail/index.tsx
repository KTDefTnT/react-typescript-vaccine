import { history } from 'umi';
import React, { useEffect, useState } from 'react';
import { getOrderDetailById } from '@/services/order';
import { MsgType } from '@/core/constant';
import { OrderState } from '@/@types/order';
import SvgIcon from '@/components/SvgIcon';
import Styles from './order.scss';

interface OrderProps {}

const Order: React.FC<OrderProps> = () => {
  const [orderInfo, setOrderInfo] = useState<OrderState>();
  useEffect(() => {
    const { orderId } = history.location.query;
    console.log('history', history.location);
    getOrderDetailById(orderId).then((resp) => {
      if (resp.status === MsgType.SUCCESS) {
        setOrderInfo(resp.data);
      }
    });
  }, []);
  return (
    <div className={Styles.container}>
      <div className={Styles.success}>
        <SvgIcon iconName="chenggong" size={80} />
        <div className={Styles.info}>预约成功</div>
        <div className={Styles.info}>预约号：{orderInfo?.orderId}</div>
      </div>
      <div className={Styles.card}>
        <div className={Styles.userInfo}>
          <div className={Styles.name}>{orderInfo?.name}</div>
          <div className={Styles.vaccine}>
            <div className={Styles.vaccineName}>{orderInfo?.vaccineName}</div>
            <div className={Styles.type}>{orderInfo?.type}</div>
          </div>
        </div>
        <div className={Styles.cell}>
          <div className={Styles.label}>接种时间</div>
          <div className={Styles.value}>
            {orderInfo?.month}-{orderInfo?.day}&nbsp;{orderInfo?.startTime}~
            {orderInfo?.endTime}
          </div>
        </div>
        <div className={Styles.cell}>
          <div className={Styles.label}>接种机构</div>
          <div className={Styles.value}>{orderInfo?.address}</div>
        </div>
      </div>

      <div className={Styles.address}>
        <div className={Styles.header}>门诊地址</div>
        <div className={Styles.content}>
          <SvgIcon iconName="ziyuan" size={60} />
          <div className={Styles.detail}>
            <div className={Styles.organ}>{orderInfo?.organ}</div>
            <div className={Styles.detailAddress}>{orderInfo?.address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
