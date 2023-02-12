import { Outlet } from 'react-router-dom';

import { Logo } from '../componets';

import styles from './MarketLayout.module.css';

export const MarketLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Logo />
        logo
      </div>
      <div>
        <button>cart</button>
      </div>
    </div>
  );
};
