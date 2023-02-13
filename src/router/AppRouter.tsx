import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CartDetails } from '../cart/CartDetails';

import { Divider, Text } from '../componets';

import { MarketLayout } from '../layouts';

import { ProductDetails } from '../products';

import { useAppSelector } from '../store/hooks';

export const AppRouter = () => {
  const { cart } = useAppSelector((state) => state.products);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Routes>
      <Route path='/' element={<MarketLayout />}>
        <Route path='/product/:slug' element={<ProductDetails />} />
        <Route
          path='/'
          element={
            <div>
              <Divider props={{ marginBottom: '0.8rem' }} />
              <Text color='caption' size='0.8rem'>
                Please choose a product from the product list
              </Text>
            </div>
          }
        />
        <Route path='/cart' element={<CartDetails />} />
      </Route>
    </Routes>
  );
};
