import { getUserInfo } from '@/services/user';
import List from './List';
import Order from './Order';
import SvgIcon from '@/components/SvgIcon';
import SearchBar from '@/components/SearchBar';
import { useEffect } from 'react';
import Styles from './index.scss';

export default function IndexPage() {
  const onSubmit = (val: string) => {
    console.log('ccc', val);
  };

  useEffect(() => {
    getUserInfo().then((resp) => {
      console.log('getUserInfo:', resp);
    });
  }, []);

  return (
    <div className={Styles.container}>
      <SearchBar placeholder="搜疫苗、科普、机构" onSubmit={onSubmit} />
      <List />
      <Order />
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
}
