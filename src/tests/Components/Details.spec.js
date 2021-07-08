import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Details from '../../components/Details';

test('should render the Details Component', () => {
    render(<Details />);
    const data = screen.getByTestId
})