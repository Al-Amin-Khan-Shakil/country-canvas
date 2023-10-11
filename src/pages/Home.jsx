import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { allCountries } from '../redux/country/countriSlice';
import Continent from '../components/Continents';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.regionalCountries);

  useEffect(() => {
    if (!countries.length) {
      dispatch(allCountries());
    }
  }, []);

  return (
    <>
      <div className="continent">
        <Continent />
      </div>
      <div className="content-container">
        <ul className="country-list">
          {countries.map((country) => (
            <li className="list-item" key={country.name}>
              <Link to={`details/${country.code}`}>
                <img src={country.flag} alt="" width="100px" height="60px" />
                <p className="country-name">{country.name}</p>
                <p className="country-area">
                  Area:
                  {' '}
                  {country.area}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
