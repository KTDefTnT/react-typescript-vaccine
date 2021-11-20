import { WingBlank } from 'antd-mobile';
import Wash from '@/static/img/wash.png';

import './index.scss';
interface NoticeProps {}

const Notice: React.FC<NoticeProps> = () => {
  return (
    <WingBlank>
      <div className="notice-container">
        <img src={Wash} className="img" alt="勤洗手" />
        <div className="content">
          <div className="title">做好这三步&nbsp;&nbsp;预防手足口</div>
          <div className="step">打疫苗&nbsp;&nbsp;勤洗手&nbsp;&nbsp;消毒好</div>
        </div>
      </div>
    </WingBlank>
  );
};

export default Notice;
