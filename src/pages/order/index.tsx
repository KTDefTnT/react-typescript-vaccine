import React, { useEffect, useState } from 'react';
import OrderNode from '@/components/OrderNode';
import { getOrderList } from '@/services/order';
import { MsgType } from '@/core/constant';
import { OrderState } from '@/@types/order';
interface OrderDetailProps {}

const OrderDetail: React.FC<OrderDetailProps> = () => {
  const [orderList, setOrderList] = useState<OrderState[]>([]);
  useEffect(() => {
    getOrderList().then((resp) => {
      if (resp.status === MsgType.SUCCESS) {
        setOrderList(resp.data);
      }
    });
  }, []);
  return (
    <React.Fragment>
      {orderList.map((orderInfo) => (
        <OrderNode orderInfo={orderInfo} />
      ))}
    </React.Fragment>
  );
};

export default OrderDetail;
