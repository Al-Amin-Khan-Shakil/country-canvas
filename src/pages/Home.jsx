import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries, searchRegion, countryDetails } from '../redux/country/countriSlice';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.regionalCountries);
  const country = useSelector((state) => state.countries.singleCountry);

  useEffect(() => {
    if (!countries.length) {
      dispatch(allCountries());
    }
  }, []);

  console.log(country);
  return (
    <>
      <div value="asia">
        <button type="button" onClick={() => dispatch(countryDetails('French Polynesia'))}>
          Asia
        </button>
      </div>
      <div className="content-container">
        <ul className="country-list">
          {countries.map((country) => (
            <li className="list-item" key={country.name}>
              <img src={country.flag} alt="" width="100px" height="60px" />
              <p className="country-name">{country.name}</p>
              <p className="country-area">
                Area:
                {' '}
                {country.area}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
