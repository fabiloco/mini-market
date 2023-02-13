import { MdShoppingCart } from 'react-icons/md';
import { useAppSelector } from '../store/hooks';
import { currency } from '../utils';

import { Logo, Button } from './';

import styles from './styles/Navbar.module.css';

export const Navbar = () => {
  const { cart } = useAppSelector((state) => state.products);

  const subTotal = cart.reduce(
    (prev, current) => current.price * current.quantity + prev,
    0
  );

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Logo />
      </div>
      <div>
        <Button colorSchema='primary' icon={<MdShoppingCart />}>
          {currency.format(subTotal)}
        </Button>
      </div>
    </div>
  );
};
