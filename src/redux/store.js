import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './country/countriSlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;
