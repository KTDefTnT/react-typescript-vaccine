import { getUserInfo } from '@/services/user';
import { useEffect } from 'react';
import styles from './index.less';

export default function IndexPage() {
  useEffect(() => {
    getUserInfo().then((resp) => {
      console.log('getUserInfo:', resp);
    });
  }, []);

  return (
    <div>
      <h1 className={`${styles.title} red`}>Page index</h1>
    </div>
  );
}
