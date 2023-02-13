import { FC } from 'react';
import { IProduct } from '../constants/products';

import styles from './styles/Product.module.css';

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={product.image} alt={product.name} />
    </div>
  );
};
