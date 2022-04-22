import { render, screen } from '@testing-library/react';
import TestContainer from '@/components/TestContainer';
import Home from './';

test('renders learn react seed link', () => {
  render(
    <TestContainer>
      <Home />
    </TestContainer>
  );
  const linkElement = screen.getByText(/Learn React Seed/i);
  expect(linkElement).toBeInTheDocument();
});
