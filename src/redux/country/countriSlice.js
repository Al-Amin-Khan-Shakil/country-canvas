import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  regionalCountries: [],
  singleCountry: [],
  loading: false,
  error: '',
};

export const allCountries = createAsyncThunk('country/allCountries', async () => {
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
    builder
      .addCase(allCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(allCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.regionalCountries = action.payload;
        state.error = '';
      })
      .addCase(allCountries.rejected, (state, action) => {
        state.loading = false;
        state.regionalCountries = [];
        state.error = action.payload;
      });
  },
});

export default countrySlice.reducer;
