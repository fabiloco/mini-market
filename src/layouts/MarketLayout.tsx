import { Outlet } from 'react-router-dom';

import { Navbar, Text } from '../componets';
import { ProductsView } from '../products';

import styles from './MarketLayout.module.css';

export const MarketLayout = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.products_container}>
        <ProductsView />
      </div>
      <div className={styles.view_container}>
        <Outlet />
      </div>
    </div>
  );
};
