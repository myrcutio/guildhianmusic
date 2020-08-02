import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/James Scott Balentine/i);
  expect(linkElement[0]).toBeInTheDocument();
});
