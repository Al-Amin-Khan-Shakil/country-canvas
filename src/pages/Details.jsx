import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import BeatLoader from 'react-spinners/BeatLoader';
import { countryDetails } from '../redux/country/countriSlice';

const Details = () => {
  const country = useSelector((state) => state.countries.singleCountry);
  const loading = useSelector((state) => state.countries.loading);
  const params = useParams();
  const dispatch = useDispatch();
  const { code } = params;

  useEffect(() => {
    dispatch(countryDetails(code.toLowerCase()));
  }, []);

  return (
    <div className="details">
      <Link to="/">
        <BsFillArrowLeftCircleFill />
      </Link>
      {loading ? (
        <BeatLoader
          color="#36d7b7"
          loading={loading}
          size={30}
          className="beat-loader"
        />
      )
        : (
          <div className="details-container">
            <div className="flag-container">
              <img src={country.flag} alt="" width="200px" />
            </div>
            <ul className="details-list">
              <li className="details-item">
                <h2>{country.name}</h2>
              </li>
              <li className="details-item">
                <div>Official Name:</div>
                <h3>{country.official}</h3>
              </li>
              <li className="details-item">
                <div>Area:</div>
                <div>{country.area}</div>
              </li>
              <li className="details-item">
                <div>Population:</div>
                <div>{country.population}</div>
              </li>
              <li className="details-item">
                <div>Region:</div>
                <div>{country.region}</div>
              </li>
              <li className="details-item">
                <div>Subregion</div>
                <div>{country.subregion}</div>
              </li>
              <li className="details-item">
                <div>Time Zone:</div>
                <div>{country.timezones}</div>
              </li>
              <li className="details-item">
                <div>Week Starts:</div>
                <div>{country.startOfWeek.toUpperCase()}</div>
              </li>
            </ul>
          </div>
        )}
    </div>
  );
};

export default Details;
