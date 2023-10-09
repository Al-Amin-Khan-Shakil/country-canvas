import { useSelector } from 'react-redux';

const Home = () => {
  const countries = useSelector((state) => state.countries.regionalCountries);

  console.log(countries);
  return (
    <>
      <div>
        home page
      </div>
    </>
  );
};

export default Home;
