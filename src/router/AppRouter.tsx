import { Route, Routes } from 'react-router-dom';
import { MarketLayout } from '../layouts/MarketLayout';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<MarketLayout />}>
        <Route path='/lol' element={<h1>select a product</h1>} />
      </Route>
    </Routes>
  );
};
