import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Home from './';
describe('HomeTest', () => {
  test('renders learn react seed link', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    await waitFor(() => {
      const linkElement = screen.getByText(/Learn React Seed/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
