import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('loads and displays properties', () => {
  render(<App />);
  expect(screen.getByText("Chalet Murasaki")).toBeInTheDocument();
  expect(screen.getByText(/This 8 bedroom chalet/i)).toBeInTheDocument();
});

test('filters properties by name or description', () => {
  render(<App />);
  const searchInput = screen.getByPlaceholderText("Search properties");
  fireEvent.change(searchInput, { target: { value: 'Murasaki' } });
  fireEvent.click(screen.getByRole('button', { name: /search/i }));
  expect(screen.getByText("Chalet Murasaki")).toBeInTheDocument();
});

test('displays error message when no properties match the filter', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText("Search properties"), { target: { value: 'Nonexistent Property' } });
  fireEvent.click(screen.getByRole('button', { name: /search/i }));
  expect(screen.getByText(/No properties match your search criteria/i)).toBeInTheDocument();
});

test('header renders with logo and navigation links', () => {
  render(<App />);
  const logo = screen.getByAltText(/Hotel Niseko/i);
  expect(logo).toBeInTheDocument();

  const nav = screen.getByRole('navigation');
  expect(within(nav).getByText(/About/i)).toBeInTheDocument();
  expect(within(nav).getByText(/Special Deals/i)).toBeInTheDocument();
});

test('search bar renders correctly with placeholder', () => {
  render(<App />);
  expect(screen.getByPlaceholderText("Search properties")).toBeInTheDocument();
});

test('initial properties are displayed', () => {
  render(<App />);
  const propertyNames = ["Chalet Murasaki", "Chalet Murasaki a", "Chalet Murasaki b", "Deep Tracks 1", "Deep Tracks 2"];
  propertyNames.forEach(name => {
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});

test('each property card has a "Book now" button', () => {
  render(<App />);
  const bookingButtons = screen.getAllByText(/Book now/i);
  expect(bookingButtons.length).toBeGreaterThanOrEqual(5);
});

test('hotel contact information is visible in the footer', () => {
  render(<App />);
  expect(screen.getByText(/Reservations:/i)).toBeInTheDocument();
  expect(screen.getByText(/Front Desk:/i)).toBeInTheDocument();
});
