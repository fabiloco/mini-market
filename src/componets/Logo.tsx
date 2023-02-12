import { MdShoppingBag } from 'react-icons/md';

import styles from './styles/Logo.module.css';

export const Logo = () => {
  return (
    <button className={styles.container}>
      <MdShoppingBag color='white' size={32} />
    </button>
  );
};
