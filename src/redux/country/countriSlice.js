import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  regionalCountries: [],
  singleCountry: [],
  loading: false,
  error: '',
};

const allCountries = createAsyncThunk('country/allCountries', async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    const { data } = response;
    return data;
  } catch (error) {
    throw error(error.message);
  }
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  },
});

export default countrySlice.reducer;
