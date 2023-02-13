import { Outlet } from 'react-router-dom';

import { Divider, Navbar, Text } from '../componets';
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
        <Text bold color='primary' props={{ marginBottom: '0.4rem' }}>
          Products
        </Text>

        <Divider props={{ marginBottom: '0.8rem' }} />
        <Outlet />
      </div>
    </div>
  );
};
