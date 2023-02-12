import { MdShoppingBag } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import styles from './styles/Logo.module.css';

export const Logo = () => {
  const navigate = useNavigate();

  const onClickLogo = () => navigate('/');

  return (
    <button className={styles.container} onClick={onClickLogo}>
      <MdShoppingBag color='white' size={32} />
    </button>
  );
};
