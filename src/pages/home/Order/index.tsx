import { history } from 'umi';
import { OrderState } from '@/@types/order';
import OrderNode from '@/components/OrderNode';
import Styles from './index.scss';

interface OrderProps {}

const orderInfo: OrderState = {
  orderId: '2245667785566',
  name: '李萌萌',
  userId: '001',
  vaccineName: '脊灰(灭活sabin株)',
  type: '免规疫苗',
  deadLine: 2,
  month: '03',
  day: '16',
  startTime: '15:30',
  endTime: '16:00',
  organ: '健康服务中心',
  address: '南山区白石洲社康中心(沙河街道)',
};

const Order: React.FC<OrderProps> = (props) => {
  const handleListView = () => {
    history.push('/orderList');
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.title}>预约信息</div>
        <div className={Styles.more} onClick={handleListView}>
          更多
        </div>
      </div>
      <OrderNode orderInfo={orderInfo} />
    </div>
  );
};

export default Order;
