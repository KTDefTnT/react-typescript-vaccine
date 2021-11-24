import { useEffect, useState } from 'react';
import { history } from 'umi';
import { getDetailByOrganId } from '@/services/organ';
import { OrganState } from '@/@types/organ';
import { MsgType } from '@/core/constant';
import SvgIcon from '@/components/SvgIcon';
import Styles from './index.scss';

interface OrganDetailProps {}

const OrganDetail: React.FC<OrganDetailProps> = () => {
  const [organInfo, setOrganDetail] = useState<OrganState>();

  useEffect(() => {
    const { organId } = history.location.query;
    getDetailByOrganId(organId).then((resp) => {
      if (resp.status === MsgType.SUCCESS) {
        setOrganDetail(resp.data);
      }
    });
  }, []);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.svgIcon}>
          <SvgIcon iconName="ta" size={40} />
        </div>
        <div className={Styles.content}>
          <div className={Styles.title}>{organInfo?.organName}</div>
          <div
            className={Styles.organType}
            dangerouslySetInnerHTML={{ __html: organInfo?.type }}
          ></div>
          <div className={Styles.sectionList}>
            {organInfo?.list.map((section) => (
              <div
                className={`${Styles[section.type]} ${Styles.type}`}
                key={section.name}
              >
                {section.name}
              </div>
            ))}
          </div>
          <div className={Styles.weekday}>
            <div className={Styles.svg}>
              <SvgIcon iconName="shizhong" size={20} />
            </div>
            <div className={Styles.timeContent}>
              {organInfo?.weekday.map((name) => (
                <div className={Styles.name} key={name}>
                  {name}
                </div>
              ))}
              <div className="time">{organInfo?.time}</div>
            </div>
          </div>
          <div className={Styles.phone}>
            <div className={Styles.svg}>
              <SvgIcon iconName="dianhua" size={20} />
            </div>
            <div className={Styles.timeContent}>{organInfo?.phone}</div>
          </div>
        </div>
      </div>
      <div className={Styles.address}>
        <div className={Styles.detail}>
          <SvgIcon iconName="address" size={20} />
          {organInfo?.address}
        </div>
        <div className={Styles.map}>
          <SvgIcon iconName="map" size={20} />
          地图
        </div>
      </div>
    </div>
  );
};

export default OrganDetail;
