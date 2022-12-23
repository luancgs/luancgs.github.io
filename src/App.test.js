import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Luan', () => {
  render(<App />);
  const linkElement = screen.getByText(/Luan/i);
  expect(linkElement).toBeInTheDocument();
});
