import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  regionalCountries: [],
  singleCountry: [],
  loading: false,
  error: '',
  region: '',
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

export const searchRegion = createAsyncThunk('country/searchRegion', async (region) => {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
    const { data } = response;
    return data;
  } catch (error) {
    throw error(error.message);
  }
});

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    getRegion: (state, action) => {
      state.region = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(allCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(allCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.regionalCountries = action.payload.map((country) => ({
          name: country.name.common,
          area: country.area,
          flag: country.flags.svg,
          official: country.name.official,
        }));
        state.error = '';
      })
      .addCase(allCountries.rejected, (state, action) => {
        state.loading = false;
        state.regionalCountries = [];
        state.error = action.payload;
      })
      .addCase(searchRegion.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchRegion.fulfilled, (state, action) => {
        state.loading = false;
        state.regionalCountries = action.payload.map((country) => ({
          name: country.name.common,
          area: country.area,
          flag: country.flags.svg,
          official: country.name.official,
        }));
        state.error = '';
      })
      .addCase(searchRegion.rejected, (state, action) => {
        state.loading = false;
        state.regionalCountries = [];
        state.error = action.payload;
      });
  },
});

export default countrySlice.reducer;
