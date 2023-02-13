import { ProductCard } from './';

import { Divider, Text } from '../componets';

import { useAppSelector } from '../store/hooks';

import styles from './styles/ProductSelector.module.css';

export const ProductSelector = () => {
  const { products } = useAppSelector((state) => state.products);

  return (
    <div className={styles.container}>
      <Text color='primary' props={{ marginBottom: '0.4rem' }}>
        Store
      </Text>

      <Divider props={{ marginBottom: '0.8rem' }} />

      <div className={styles.products_container}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
