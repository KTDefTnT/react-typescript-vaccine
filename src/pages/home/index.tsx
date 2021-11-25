import List from './List';
import Order from './Order';
import SvgIcon from '@/components/SvgIcon';
import SearchBar from '@/components/SearchBar';
import Styles from './index.scss';
import { connect } from 'umi';
import { ConnectProps, ConnectState } from '@/@types/connect';
import { UserModelState } from '@/@types/user';

interface HomeProps extends ConnectProps {
  user: UserModelState;
}
const HomePage: React.FC<HomeProps> = ({ user }) => {
  const userInfo = user.userInfo;
  console.log('user', userInfo);

  const onSubmit = (val: string) => {
    console.log('ccc', val);
  };

  return (
    <div className={Styles.container}>
      <SearchBar placeholder="搜疫苗、科普、机构" onSubmit={onSubmit} />
      <List />
      {userInfo && !!userInfo.userId && <Order />}
      <div className={Styles.ordering}>
        <div className={Styles.svg}>
          <SvgIcon iconName="hpv" size={70} />
          <SvgIcon iconName="hpv" size={60} />
        </div>
        <div className={Styles.content}>
          <div className={Styles.title}>
            <SvgIcon iconName="xinzeng" size={18} />
            HPV疫苗预约中
          </div>
          <div className={Styles.notice}>安心疫苗&nbsp;放心接种</div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ user }: ConnectState) => ({ user }))(HomePage);
