import { Button, Divider, Text } from '../componets';

import { useAppSelector } from '../store/hooks';

import { currency } from '../utils';

import styles from './styles/CartDetails.module.css';

export const CartDetails = () => {
  const { cart } = useAppSelector((state) => state.products);

  const subTotal = cart.reduce(
    (prev, current) => current.price * current.quantity + prev,
    0
  );

  return (
    <div>
      <Text bold color='primary' props={{ marginBottom: '0.4rem' }}>
        Shopping Cart
      </Text>
      <Divider props={{ marginBottom: '0.8rem' }} />
      <div className={styles.container}>
        {cart.map((cartProduct) => (
          <div key={cartProduct.slug}>
            <div className={styles.cart_product}>
              <div className={styles.quantity}>{cartProduct.quantity}</div>
              <img
                className={styles.image}
                src={cartProduct.image}
                alt={cartProduct.name}
              />
            </div>
            <Divider />
          </div>
        ))}

        <div className={styles.total_container}>
          <Text
            bold
            color='caption'
            size='1.3rem'
            props={{ marginRight: '0.5rem' }}
          >
            Total:
          </Text>
          <Text bold color='primary' size='1.3rem'>
            {currency.format(subTotal)}
          </Text>
        </div>
      </div>
    </div>
  );
};
