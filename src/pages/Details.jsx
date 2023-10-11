import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { countryDetails } from '../redux/country/countriSlice';

const Details = () => {
  const country = useSelector((state) => state.countries.singleCountry);
  const params = useParams();
  const dispatch = useDispatch();
  const { code } = params;

  useEffect(() => {
    dispatch(countryDetails(code.toLowerCase()));
  }, []);

  return (
    <div className="details">
      <Link to="/">
        back
      </Link>
      <img src={country.flag} alt="" width="200px" />
      <ul>
        <li>{country.name}</li>
        <li>{country.official}</li>
        <li>{country.area}</li>
        <li>{country.population}</li>
        <li>{country.region}</li>
        <li>{country.subregion}</li>
        <li>{country.timezones}</li>
        <li>{country.startOfWeek}</li>
      </ul>
    </div>
  );
};

export default Details;
