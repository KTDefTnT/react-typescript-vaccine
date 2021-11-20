import SvgIcon from '@/components/SvgIcon';
import { OrganState } from '@/@types/organ';

interface OrganNodeProps {
  organInfo: OrganState;
}

const OrganNode: React.FC<OrganNodeProps> = ({ organInfo }) => {
  return (
    <div className="container">
      <SvgIcon iconName="ta" />
      <div className="content">
        <div className="header">
          <div className="title">{organInfo.organName}</div>
          <div className="free">{organInfo.isFree ? '有号' : '约满'}</div>
        </div>
        <div className="sectionList">
          {organInfo.list.map((section) => (
            <div className={section.type}>{section.name}</div>
          ))}
        </div>
        <div className="address">
          <div className="name">{organInfo.address}</div>
          <div className="distance">
            <SvgIcon iconName="fasong" />
            {organInfo.distance}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganNode;
