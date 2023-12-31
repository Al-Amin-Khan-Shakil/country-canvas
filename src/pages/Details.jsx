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
    if (code) {
      dispatch(countryDetails(code.toLowerCase()));
    }
  }, [dispatch, code]);

  return (
    <div className="details">
      <Link to="/" className="back-btn">
        <BsFillArrowLeftCircleFill />
      </Link>
      {loading ? (
        <BeatLoader
          color="#b4f6ff"
          loading={loading}
          size={20}
          className="beat-loader"
        />
      )
        : (
          <div className="details-container">
            <div className="flag-container">
              <img src={country.flag} alt={`flag of ${country.name}`} className="flag-image2" />
            </div>
            <ul className="details-list">
              <li className="details-item">
                <h2 className="name">{country.name}</h2>
              </li>
              <li className="details-item">
                <div>Official Name:</div>
                <h3 className="official-name">{country.official}</h3>
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
                <div>{country.startOfWeek}</div>
              </li>
            </ul>
          </div>
        )}
    </div>
  );
};

export default Details;
