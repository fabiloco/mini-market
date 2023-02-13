import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IProduct, products } from '../../../constants/products';

export interface ICart extends IProduct {
  quantity: number;
}

export interface IActiveProfileSlice {
  products: IProduct[];
  activeProduct: IProduct | undefined;
  cart: ICart[];
}

const cartProducts = JSON.parse(
  localStorage.getItem('cart') || '[]'
) as ICart[];

const initialState: IActiveProfileSlice = {
  products: products,
  activeProduct: undefined,
  cart: cartProducts,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    onSetActiveProduct: (state, action: PayloadAction<IProduct>) => {
      state.activeProduct = action.payload;
    },
    onSetCart: (state, action: PayloadAction<ICart[]>) => {
      state.cart = action.payload;
    },
    onAddCartProduct: (state, action: PayloadAction<IProduct>) => {
      const cartContainProduct = state.cart.find(
        (cartProduct) => cartProduct.slug === action.payload.slug
      );

      if (cartContainProduct) {
        state.cart = state.cart.map((cartProduct) => {
          if (cartProduct.slug === action.payload.slug) {
            return {
              ...action.payload,
              quantity: cartProduct.quantity + 1,
            };
          }
          return cartProduct;
        });
      } else {
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
    },
    onRemoveCartProduct: (state, action: PayloadAction<IProduct>) => {
      const cartContainProduct = state.cart.find(
        (cartProduct) => cartProduct.slug === action.payload.slug
      );

      if (cartContainProduct) {
        state.cart = state.cart
          .filter((cartProduct) =>
            cartProduct.quantity - 1 < 1 ? false : true
          )
          .map((cartProduct) => {
            if (cartProduct.slug === action.payload.slug) {
              return {
                ...action.payload,
                quantity: cartProduct.quantity - 1,
              };
            }
            return cartProduct;
          });
      }
    },
  },
});

export const {
  onSetActiveProduct,
  onAddCartProduct,
  onRemoveCartProduct,
  onSetCart,
} = productsSlice.actions;
