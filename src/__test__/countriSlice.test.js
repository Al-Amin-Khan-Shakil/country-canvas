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

  it('test all countries', () => {
    const payload = [{
      name: { common: 'Country 1' },
      area: 100,
      cca3: 'ABC',
      flags: { svg: 'flag-url' },
      name: { official: 'Official Name' }
    }];
    const state = countryReducer(initialState, allCountries.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.regionalCountries.length).toEqual(1);
    expect(state.error).toEqual('');
  })
  
  it('test regional countries', () => {
    const payload = [{
      name: { common: 'Country 1' },
      area: 100,
      cca3: 'ABC',
      flags: { svg: 'flag-url' },
      name: { official: 'Official Name' }
    },
    {
      name: { common: 'Country 1' },
      area: 100,
      cca3: 'ABC',
      flags: { svg: 'flag-url' },
      name: { official: 'Official Name' }
    }];
    const state = countryReducer(initialState, searchRegion.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.regionalCountries.length).toEqual(2);
    expect(state.error).toEqual('');
  })

  it('test country details', () => {
    const payload = [{
      name: { common: 'Country 1' },
      area: 100,
      flags: { svg: 'flag-url' },
      region: 'Region 1',
      subregion: 'Subregion 1',
      population: 1000000,
      timezones: ['UTC'],
      startOfWeek: 'Sunday',
      official: 'Official Name',
    }];
    const state = countryReducer(initialState, countryDetails.fulfilled(payload));
    expect(state.loading).toBe(false);
    expect(state.singleCountry).toEqual(
      {
        "area": 100,
        "flag": "flag-url",
        "name": "Country 1",
        "official": undefined,
        "population": 1000000,
        "region": "Region 1",
        "startOfWeek": "Sunday",
        "subregion": "Subregion 1", 
        "timezones": "UTC"}
    );
    expect(state.error).toEqual('');
  })
});