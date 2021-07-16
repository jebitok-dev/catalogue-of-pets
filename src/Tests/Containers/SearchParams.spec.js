import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchParams from '../../Containers/SearchParams';

test('should render the SearchPet Component', async () => {
  const { getByTestId } = render(<SearchParams />);

  const data = getByTestId('search-params-id');
  expect(data).toHaveClass('search-params');
  const dataForm = getByTestId('search-params-form');
  expect(dataForm).toHaveTextContent('Animal');
  expect(dataForm).toHaveTextContent('Size');
  expect(dataForm).toHaveTextContent('Gender');
  expect(dataForm).toHaveTextContent('Submit');
});
