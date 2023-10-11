import { useSelector } from 'react-redux';

const Details = () => {
  const country = useSelector((state) => state.countries.singleCountry);
  return (
    <div className="details">
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
