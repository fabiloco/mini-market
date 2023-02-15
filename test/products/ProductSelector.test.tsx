import React from 'react';

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { ProductSelector } from '../../src/products';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';

describe('tests in ProductSelector component', () => {
  test('test', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductSelector />
        </Provider>
      </MemoryRouter>
    );
  });
});
