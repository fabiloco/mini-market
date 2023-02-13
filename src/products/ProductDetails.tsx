import { MdAdd, MdRemove } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
import { Button, Divider, Text } from '../componets';
import { useAppSelector } from '../store/hooks';
import styles from './styles/ProductDetails.module.css';

export const ProductDetails = () => {
  const { activeProduct } = useAppSelector((state) => state.products);

  if (!activeProduct) {
    return <Navigate to='/' />;
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={activeProduct.image} />
      <div className={styles.info_container}>
        <div className={styles.info}>
          <Text bold>{activeProduct.name}</Text>
          <div className={styles.dot} />
          <Text color='primary' bold>
            {activeProduct.price}
          </Text>
        </div>
        <div className={styles.actions}>
          <Button>
            <MdRemove />
          </Button>
          <Button colorSchema='primary'>
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
  );
};
