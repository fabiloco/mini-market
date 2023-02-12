import { Text } from '../componets';
import { products } from '../constants/products';
import { Product } from './';
import styles from './styles/ProductsView.module.css';

export const ProductsView = () => {
  return (
    <div className={styles.container}>
      <Text color='primary' props={{ marginBottom: '0.4rem' }}>
        Store
      </Text>
      <hr />

      {products.map((product) => (
        <Product product={product} />
      ))}

      <div className={styles.products_container}></div>
    </div>
  );
};
