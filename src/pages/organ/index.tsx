import { getCheckedOrgan } from '@/services/organ';
import OrganNode from './OrganNode';
import { useEffect } from 'react';
import styles from './index.less';

export default function OrganPage() {
  useEffect(() => {
    getCheckedOrgan().then((resp) => {
      console.log('getCheckedOrgan:', resp);
    });
  }, []);

  return (
    <div>
      <h1 className={`${styles.title} red`}>OrganPage index</h1>
    </div>
  );
}
