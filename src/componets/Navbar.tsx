import { MdClose, MdShoppingCart } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { onSetCart } from '../store/slices/products';
import { currency } from '../utils';

import { Logo, Button } from './';

import styles from './styles/Navbar.module.css';

export const Navbar = () => {
  const { cart } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isInCartPage = pathname.includes('/cart');

  const subTotal = cart.reduce(
    (prev, current) => current.price * current.quantity + prev,
    0
  );

  const onClickCartBtn = () => navigate('/cart');
  const onClickDeleteCart = () => dispatch(onSetCart([]));

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Logo />
      </div>
      <div>
        {isInCartPage ? (
          <div className={styles.cart_btn_container}>
            <div className={styles.cart_alt_btn}>
              <MdShoppingCart />
              {currency.format(subTotal)}
            </div>
            <Button colorSchema='primary' onClick={onClickDeleteCart}>
              <MdClose />
            </Button>
          </div>
        ) : (
          <Button
            colorSchema='primary'
            icon={<MdShoppingCart />}
            onClick={onClickCartBtn}
          >
            {currency.format(subTotal)}
          </Button>
        )}
      </div>
    </div>
  );
};
