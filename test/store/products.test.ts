import { describe, test, expect, beforeEach } from 'vitest';
import { products } from '../../src/constants/products';

import { productsSlice } from '../../src/store/slices/products';
import {
  onSetActiveProduct,
  onSetCart,
  onAddCartProduct,
  onRemoveCartProduct,
} from '../../src/store/slices/products';

describe('tests in productSlice store', () => {
  let state;

  beforeEach(() => {
    state = { products, activeProduct: undefined, cart: [] };
  });

  test('should set active product', () => {
    state = productsSlice.reducer(state, onSetActiveProduct(products[0]));
    expect(state).toEqual({
      ...state,
      activeProduct: products[0],
    });
  });

  test('should set cart products', () => {
    state = productsSlice.reducer(
      state,
      onSetCart([{ ...products[0], quantity: 1 }])
    );
    expect(state).toEqual({
      ...state,
      cart: [{ ...products[0], quantity: 1 }],
    });
  });

  test('should add cart product', () => {
    const quantity = 3;

    for (let i = 0; i < quantity; i++) {
      state = productsSlice.reducer(state, onAddCartProduct(products[0]));
    }

    expect(state).toEqual({
      ...state,
      cart: [{ ...products[0], quantity }],
    });
  });

  test('should remove cart product', () => {
    const quantity = 3;

    for (let i = 0; i < quantity; i++) {
      state = productsSlice.reducer(state, onAddCartProduct(products[0]));
    }

    state = productsSlice.reducer(state, onRemoveCartProduct(products[0]));

    expect(state).toEqual({
      ...state,
      cart: [{ ...products[0], quantity: quantity - 1 }],
    });
  });
});
