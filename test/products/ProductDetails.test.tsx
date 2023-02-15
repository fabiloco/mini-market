import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { describe, test, expect, beforeEach } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { MiniMarketApp } from '../../src/MiniMarketApp';
import { products } from '../../src/constants/products';
import { productsSlice } from '../../src/store/slices/products';

describe('tests in ProductDetails component', () => {
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

    cleanup();

    render(
      <MemoryRouter>
        <Provider store={store}>
          <MiniMarketApp />
        </Provider>
      </MemoryRouter>
    );
  });

  test('should change ui when active product change', () => {
    fireEvent(
      screen.getByTestId(`product-card-${products[0].slug}`),
      new MouseEvent('click', { bubbles: true })
    );

    expect(screen.getByTestId('product-details-title').textContent).toContain(
      products[0].name
    );

    fireEvent(
      screen.getByTestId(`product-card-${products[1].slug}`),
      new MouseEvent('click', { bubbles: true })
    );

    expect(screen.getByTestId('product-details-title').textContent).toContain(
      products[1].name
    );
  });

  test('should change ui when a product is added to the card', () => {
    fireEvent(
      screen.getByTestId(`product-card-${products[0].slug}`),
      new MouseEvent('click', { bubbles: true })
    );

    fireEvent(
      screen.getByTestId('add-btn'),
      new MouseEvent('click', { bubbles: true })
    );

    expect(
      screen.getByTestId(`product-card-quantity-${products[0].slug}`)
        .textContent
    ).toContain(1);

    fireEvent(
      screen.getByTestId('add-btn'),
      new MouseEvent('click', { bubbles: true })
    );

    expect(
      screen.getByTestId(`product-card-quantity-${products[0].slug}`)
        .textContent
    ).toContain(2);

    expect(
      screen.getByTestId('product-details-quantity').textContent
    ).toContain(2);
  });

  test('should change ui when a product is removed from the cart', () => {
    fireEvent(
      screen.getByTestId(`product-card-${products[0].slug}`),
      new MouseEvent('click', { bubbles: true })
    );

    fireEvent(
      screen.getByTestId('add-btn'),
      new MouseEvent('click', { bubbles: true })
    );

    expect(
      screen.getByTestId(`product-card-quantity-${products[0].slug}`)
        .textContent
    ).toContain(1);

    fireEvent(
      screen.getByTestId('add-btn'),
      new MouseEvent('click', { bubbles: true })
    );

    expect(
      screen.getByTestId(`product-card-quantity-${products[0].slug}`)
        .textContent
    ).toContain(2);

    fireEvent(
      screen.getByTestId('remove-btn'),
      new MouseEvent('click', { bubbles: true })
    );

    expect(
      screen.getByTestId(`product-card-quantity-${products[0].slug}`)
        .textContent
    ).toContain(1);

    expect(
      screen.getByTestId('product-details-quantity').textContent
    ).toContain(1);

    fireEvent(
      screen.getByTestId('remove-btn'),
      new MouseEvent('click', { bubbles: true })
    );

    expect(
      screen.queryByTestId(`product-card-quantity-${products[0].slug}`)
    ).toBeNull();

    fireEvent(
      screen.getByTestId('remove-btn'),
      new MouseEvent('click', { bubbles: true })
    );

    expect(
      screen.getByTestId('product-details-quantity').textContent
    ).toContain(0);
  });
});
