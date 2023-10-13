import countryReducer, { initialState, allCountries, searchRegion, countryDetails } from "../redux/country/countriSlice";

describe('test all reducer', () => {
  it('test initial state', () => {
    expect(countryReducer(initialState, {})).toEqual({
      regionalCountries: [],
      singleCountry: {},
      loading: false,
      error: '',
    });
  });
});