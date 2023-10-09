import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countriSlice';

const store = configureStore({
  countries: countryReducer,
});

export default store;
