import { render, screen } from '@testing-library/react';
import App from './App';

test('I will do the test later', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
