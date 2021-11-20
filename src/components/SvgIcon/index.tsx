interface IconProps {
  iconName?: string;
  size?: number;
}

const Icon: React.FC<IconProps> = ({ iconName = 'yimiao', size = 20 }) => {
  return (
    <svg
      className="icon iconfont"
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-${iconName}`}></use>
    </svg>
  );
};

export default Icon;
