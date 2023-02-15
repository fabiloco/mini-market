import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { describe, test, expect, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { ProductSelector } from '../../src/products';
import { products } from '../../src/constants/products';
import { productsSlice } from '../../src/store/slices/products';

describe('tests in ProductSelector component', () => {
  let store = configureStore({
    reducer: {
      products: productsSlice.reducer,
    },
  });

  beforeEach(() => {
    store = configureStore({
      reducer: {
        products: productsSlice.reducer,
      },
    });
  });

  test('should set active product when a product card is press', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductSelector />
        </Provider>
      </MemoryRouter>
    );

    fireEvent(
      screen.getByAltText(products[0].name),
      new MouseEvent('click', { bubbles: true })
    );

    expect(store.getState().products.activeProduct).toEqual(products[0]);

    fireEvent(
      screen.getByAltText(products[2].name),
      new MouseEvent('click', { bubbles: true })
    );

    expect(store.getState().products.activeProduct).toEqual(products[2]);
  });
});
