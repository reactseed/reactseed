import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Home from './';

test('renders learn react seed link', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Learn React Seed/i);
  expect(linkElement).toBeInTheDocument();
});
