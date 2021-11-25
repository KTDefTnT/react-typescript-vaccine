import Header from './Header';
import Notice from './Notice';
import List from './List';

import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <Header />
      <Notice />
      <List />
    </div>
  );
}
