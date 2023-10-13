import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import Details from '../pages/Details';

const mockStore = configureMockStore([]);
const mockDetails = () => (
  <BrowserRouter>
    <Details />
  </BrowserRouter>
);

test('Test details page', () => {
  const store = mockStore({
    countries: {
      singleCountry: {
        name: 'country',
        area: 100,
        flag: 'flag-url',
        region: 'asia',
        subregion: 'southasia',
        population: '200',
        timezones: 'UTC',
        startOfWeek: 'monday',
        official: 'officialName',
      },
    },
  });

  render(
    <Provider store={store}>
      {mockDetails()}
    </Provider>,
  );
  expect(screen.getByRole('img')).toBeTruthy();
  expect(screen.getByText(/country/i)).toBeTruthy();
  expect(screen.getByText(/100/i)).toBeTruthy();
  expect(screen.getByText(/southasia/i)).toBeTruthy();
  expect(screen.getByText(/monday/i)).toBeTruthy();
  expect(screen.getByText(/officialName/i)).toBeTruthy();
});
