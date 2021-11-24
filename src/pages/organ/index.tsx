import { history } from 'umi';
import { useEffect, useState } from 'react';
import { MsgType } from '@/core/constant';
import { OrganState } from '@/@types/organ';
import { getCheckedOrgan, getOrganList } from '@/services/organ';
import SearchBar from '@/components/SearchBar';
import OrganNode from '@/components/OrganNode';
import CheckedOrganNode from './CheckedOrganNode';
import styles from './index.less';

export default function OrganPage() {
  const [organList, setOrganList] = useState<OrganState[]>();
  const [checkedOrgan, setCheckedOrgan] = useState<OrganState>();
  useEffect(() => {
    // 获取所有列表
    getOrganList().then((resp) => {
      if (resp.status === MsgType.SUCCESS) {
        setOrganList(resp.data);
      }
    });
    // 获取已选中的列表
    getCheckedOrgan().then((resp) => {
      if (resp.status === MsgType.SUCCESS) {
        setCheckedOrgan(resp.data);
      }
    });
  }, []);

  const handleDetailView = (organInfo: OrganState) => {
    history.push({
      pathname: '/organDetail',
      query: {
        organId: organInfo.organId,
      },
    });
    console.log('organInfo', organInfo);
  };

  return (
    <div>
      <SearchBar
        showLeft={false}
        showRight={false}
        placeholder="输入机构的名称"
      />
      <div className={styles.container}>
        {checkedOrgan && (
          <CheckedOrganNode
            organInfo={checkedOrgan}
            handleDetailView={handleDetailView}
          />
        )}
        <div className={styles.blank}>
          {organList?.map((organInfo: OrganState) => (
            <OrganNode
              organInfo={organInfo}
              key={organInfo.organId}
              handleDetailView={handleDetailView}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
