import { MdShoppingCart } from 'react-icons/md';

import { Logo, Button } from './';

import styles from './styles/Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Logo />
      </div>
      <div>
        <Button icon={<MdShoppingCart />}>$0.0</Button>
      </div>
    </div>
  );
};
