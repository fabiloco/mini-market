import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct, products } from '../../../constants/products';

export interface IActiveProfileSlice {
  products: IProduct[];
  activeProduct: IProduct | undefined;
}

const initialState: IActiveProfileSlice = {
  products: products,
  activeProduct: undefined,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    onSetActiveProduct: (state, action: PayloadAction<IProduct>) => {
      state.activeProduct = action.payload;
    },
  },
});

export const { onSetActiveProduct } = productsSlice.actions;
