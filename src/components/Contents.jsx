import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { allCountries } from '../redux/country/countriSlice';

const Contents = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.regionalCountries);

  useEffect(() => {
    if (!countries.length) {
      dispatch(allCountries());
    }
  }, []);

  return (
    <ul className="country-list">
      {countries.map((country) => (
        <li className="list-item" key={country.name}>
          <Link to={`details/${country.code}`}>
            <div className="img-container">
              <img src={country.flag} alt="" width="100px" height="60px" />
            </div>
            <div className="arrow-container">
              <BsFillArrowRightCircleFill />
            </div>
            <div className="name-container">
              <p className="country-name">{country.name}</p>
              <p className="country-area">
                Area:
                {' '}
                {country.area}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Contents;
