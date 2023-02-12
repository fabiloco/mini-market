import { products } from '../constants/products';

import { Product } from './';

import { Divider, Text } from '../componets';

import styles from './styles/ProductsView.module.css';

export const ProductsView = () => {
  return (
    <div className={styles.container}>
      <Text color='primary' props={{ marginBottom: '0.4rem' }}>
        Store
      </Text>

      <Divider props={{ marginBottom: '0.8rem' }} />

      <div className={styles.products_container}>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};
