import { getUserInfo } from '@/services/user';
import { useEffect } from 'react';
import Header from './Header';
import Notice from './Notice';
import List from './List';

import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    getUserInfo().then((resp) => {
      console.log('getUserInfo:', resp);
    });
  }, []);

  return (
    <div>
      <Header />
      <Notice />
      <List />
    </div>
  );
}
