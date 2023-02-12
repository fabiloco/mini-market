import { FC } from 'react';
import { IProduct } from '../constants/products';

import styles from './styles/Product.module.css';

interface Props {
  product: IProduct;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.name} />
    </div>
  );
};
