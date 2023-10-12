import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import GridLoader from 'react-spinners/GridLoader';
import { allCountries } from '../redux/country/countriSlice';

const Contents = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.regionalCountries);
  const loading = useSelector((state) => state.countries.loading);

  useEffect(() => {
    if (!countries.length) {
      dispatch(allCountries());
    }
  }, []);

  return (
    <>
      {loading ? <GridLoader color="#b4f6ff" loading={loading} size={10} className="grid-loader" />
        : (
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
                    <h2 className="country-name">{country.name}</h2>
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
        )}
    </>
  );
};

export default Contents;
