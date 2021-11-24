import SvgIcon from '@/components/SvgIcon';
import { OrganState } from '@/@types/organ';
import Styles from './index.scss';

interface OrganNodeProps {
  organInfo: OrganState | undefined;
  hasBorder?: boolean;
  showAddress?: boolean;
  handleDetailView?: (organInfo: OrganState) => void;
}

const OrganNode: React.FC<OrganNodeProps> = ({
  organInfo,
  hasBorder,
  showAddress = true,
  handleDetailView,
}) => {
  const name = organInfo?.isFree ? 'free' : 'disabled';
  return (
    <div
      className={`${Styles.container} ${hasBorder ? Styles.noBorder : ''}`}
      onClick={() => handleDetailView && handleDetailView(organInfo)}
    >
      <div className={Styles.svgIcon}>
        <SvgIcon iconName="ta" size={40} />
      </div>
      <div className={Styles.content}>
        <div className={Styles.header}>
          <div className={Styles.title}>{organInfo?.organName}</div>
          <div className={Styles[name]}>
            {organInfo?.isFree ? '有号' : '约满'}
          </div>
        </div>
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
        {showAddress && (
          <div className={Styles.address}>
            <div className={`${Styles.name} ${Styles.ellipsis}`}>
              {organInfo?.address}
            </div>
            <div className={Styles.distance}>
              <span className={Styles.svg}>
                <SvgIcon iconName="fasong" />
              </span>
              {organInfo?.distance}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganNode;
