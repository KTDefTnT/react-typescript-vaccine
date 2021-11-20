import { history } from 'umi';
import { OrderState } from '@/@types/order';
import SvgIcon from '@/components/SvgIcon';
import Styles from './index.scss';

interface OrderNodeProps {
  orderInfo: OrderState;
}

const OrderNode: React.FC<OrderNodeProps> = ({ orderInfo }) => {
  const handleDetailView = () => {
    history.push({
      pathname: '/orderDetail',
      query: {
        orderId: orderInfo.orderId,
      },
    });
  };
  return (
    <div className={Styles.order} onClick={handleDetailView}>
      <div className={Styles.itemHeader}>
        <div className={Styles.name}>{orderInfo.name}</div>
        <div className={Styles.vaccineName}>
          {orderInfo.vaccineName}
          <span className={Styles.type}>{orderInfo.type}</span>
        </div>
      </div>
      <div className={Styles.content}>
        <div className={Styles.deadLine}>
          <span>{orderInfo.deadLine}</span>天后接种
        </div>
        <div className={Styles.timeContainer}>
          <div className={Styles.date}>
            <span>{orderInfo.month}</span>月<span>{orderInfo.day}</span>日
          </div>
          <div className={Styles.time}>
            <span>{orderInfo.startTime}</span>~<span>{orderInfo.endTime}</span>
          </div>
        </div>
        <div className={Styles.address}>
          <SvgIcon iconName="dizhi" size={18} />
          {orderInfo.address}
        </div>
      </div>
    </div>
  );
};

export default OrderNode;
