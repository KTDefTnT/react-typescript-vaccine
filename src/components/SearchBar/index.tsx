import Styles from './index.scss';
import { SearchBar } from 'antd-mobile';
interface SearchProps {
  onClear?: (val: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (val: string) => void;
  onSubmit?: (val: string) => void;
  placeholder?: string;
  defaultValue?: string;
}

const Search: React.FC<SearchProps> = ({
  onClear,
  onFocus,
  onBlur,
  onChange,
  onSubmit,
  placeholder,
  defaultValue,
}) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.leftIcon}>左边</div>
      <div className={Styles.searchBar}>
        <SearchBar
          onClear={onClear}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          onSubmit={onSubmit}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </div>
      <div className={Styles.rightIcon}>有笔</div>
    </div>
  );
};

export default Search;
