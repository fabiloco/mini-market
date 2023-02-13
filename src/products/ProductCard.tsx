import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../constants/products';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { onSetActiveProduct } from '../store/slices/products';

import styles from './styles/ProductCard.module.css';

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const navigate = useNavigate();

  const { activeProduct } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const isSelected = activeProduct?.slug === product.slug;

  const onClickCard = () => {
    dispatch(onSetActiveProduct(product));
    navigate(`/${product.slug}`);
  };

  return (
    <div
      className={`${styles.container} ${isSelected ? styles.selected : ''}`}
      onClick={onClickCard}
    >
      <img className={styles.image} src={product.image} alt={product.name} />
    </div>
  );
};
