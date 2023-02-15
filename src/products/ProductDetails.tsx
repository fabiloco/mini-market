import { MdAdd, MdRemove } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { Button, Divider, Text } from '../componets';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  onAddCartProduct,
  onRemoveCartProduct,
} from '../store/slices/products';
import { currency } from '../utils';

import styles from './styles/ProductDetails.module.css';

export const ProductDetails = () => {
  const { activeProduct, cart } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();

  const productQuantity =
    cart.find((cartProduct) => cartProduct.slug === activeProduct?.slug)
      ?.quantity || 0;

  if (!activeProduct) {
    return <Navigate to='/' />;
  }

  const onAdd = () => {
    dispatch(onAddCartProduct(activeProduct));
  };

  const onRemove = () => {
    dispatch(onRemoveCartProduct(activeProduct));
  };

  return (
    <div>
      <Text bold color='primary' props={{ marginBottom: '0.4rem' }}>
        Products
      </Text>
      <Divider props={{ marginBottom: '0.8rem' }} />

      <div className={styles.container}>
        <div data-testid='product-details-quantity' className={styles.quantity}>
          {productQuantity}
        </div>
        <img className={styles.image} src={activeProduct.image} />
        <div className={styles.info_container}>
          <div className={styles.info}>
            <Text dataTestId='product-details-title' bold>
              {activeProduct.name}
            </Text>
            <div className={styles.dot} />
            <Text color='primary' bold>
              {currency.format(activeProduct.price)}
            </Text>
          </div>
          <div className={styles.actions}>
            <Button dataTestId='remove-btn' onClick={onRemove}>
              <MdRemove />
            </Button>
            <Button dataTestId='add-btn' colorSchema='primary' onClick={onAdd}>
              <MdAdd />
            </Button>
          </div>
        </div>
        <Divider props={{ margin: '0.5rem 0' }} />
        <Text size='0.8rem' color='caption'>
          {activeProduct.description}
        </Text>
        <Divider props={{ margin: '0.5rem 0' }} />
      </div>
    </div>
  );
};
