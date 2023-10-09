import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allCountries, searchRegion } from '../redux/country/countriSlice';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.regionalCountries);

  useEffect(() => {
    if (!countries.length) {
      dispatch(allCountries());
    }
  }, []);

  console.log(countries);
  return (
    <>
      <div value="asia">
        <button type="button" onClick={() => dispatch(searchRegion('Asia'))}>
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
