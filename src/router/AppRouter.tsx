import { Route, Routes } from 'react-router-dom';
import { Text } from '../componets';

import { MarketLayout } from '../layouts/MarketLayout';

import { ProductDetails } from '../products';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MarketLayout />}>
        <Route path='/:slug' element={<ProductDetails />} />
        <Route
          path='/'
          element={
            <Text color='caption' size='0.8rem'>
              Please choose a product from the product list
            </Text>
          }
        />
      </Route>
    </Routes>
  );
};
