import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import MainPage from './MainPage';

// Mock useNavigate
jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('navigates to hero details on hero click', () => {
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);
  
  renderWithRouter(<MainPage />);
  
  // Simulate clicking the button with the text 'ВШАНУВАТИ ГЕРОЯ'
  fireEvent.click(screen.getAllByText(/ВШАНУВАТИ ГЕРОЯ/i)[0]);
  
  // Expect the mock navigate function to be called with the correct path
  expect(mockNavigate).toHaveBeenCalledWith('/details/20');
});
