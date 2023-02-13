import { Outlet } from 'react-router-dom';

import { Navbar } from '../componets';
import { ProductSelector } from '../products';

import styles from './MarketLayout.module.css';

export const MarketLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.products_container}>
        <ProductSelector />
      </div>
      <div className={styles.view_container}>
        <Outlet />
      </div>
    </div>
  );
};
