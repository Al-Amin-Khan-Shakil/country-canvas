import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

const MockHeader = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

it('test header', () => {
  render(<MockHeader />);
  expect(screen.getByRole('navigation')).toBeTruthy();
});

it('test header', () => {
  render(<MockHeader />);
  expect(screen.getByRole('link')).toBeTruthy();
});
