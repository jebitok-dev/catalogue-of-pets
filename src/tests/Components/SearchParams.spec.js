import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchParams from '../../components/SearchParams';

test('should render the SearchParams Component', () => {
  const { getByTestId } = render(<SearchParams />);

  const data = getByTestId('search-params-id');
  expect(data).toHaveClass('search-params');
  const form = getByTestId('search-params-form');
  expect(form).toHaveTextContent('location');
  expect(form).toHaveTextContent('Animal');
  expect(form).toHaveTextContent('barnyard');
  expect(form).toHaveTextContent('cat');
  expect(form).toHaveTextContent('dog');
  expect(form).toHaveTextContent('horse');
  expect(form).toHaveTextContent('rabbits');
  expect(form).toHaveTextContent('scales-fins-other');
  expect(form).toHaveTextContent('small-furry');
  expect(form).toHaveTextContent('Breed');
  expect(form).toHaveTextContent('Submit');
});
