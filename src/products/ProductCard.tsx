import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../constants/products';
import { useAppDispatch } from '../store/hooks';
import { onSetActiveProduct } from '../store/slices/products';

import styles from './styles/Product.module.css';

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onClickCard = () => {
    dispatch(onSetActiveProduct(product));
    navigate(`/${product.slug}`);
  };

  return (
    <div className={styles.container} onClick={onClickCard}>
      <img className={styles.image} src={product.image} alt={product.name} />
    </div>
  );
};
