import OrganNode from '@/components/OrganNode';
import { OrganState } from '@/@types/organ';
import Styles from './index.scss';

interface CheckedOrganNodeProps {
  organInfo: OrganState;
  handleDetailView: (organInfo: OrganState) => void;
}

const CheckedOrganNode: React.FC<CheckedOrganNodeProps> = ({
  organInfo,
  handleDetailView,
}) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.left}>档案所在机构</div>
        <div className={Styles.right}>
          <span className={`${Styles.type} ${Styles.arrived}`}>去过</span>
          <span className={`${Styles.type} ${Styles.collect}`}>已收藏</span>
        </div>
      </div>
      <div className={Styles.organ}>
        <OrganNode
          organInfo={organInfo}
          hasBorder={true}
          handleDetailView={(organInfo) => handleDetailView(organInfo)}
        />
      </div>
    </div>
  );
};

export default CheckedOrganNode;
