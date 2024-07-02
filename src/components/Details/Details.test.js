import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Details from './Details';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('renders "Героя не знайдено" when hero is not found', () => {
  renderWithRouter(<Details />, { route: '/details/9999' });
  expect(screen.getByText((content, element) => content.includes('Героя не знайдено'))).toBeInTheDocument();
});
