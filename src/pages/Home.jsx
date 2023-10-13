import Continent from '../components/Continents';
import Contents from '../components/Contents';

const Home = () => (
  <>
    <div className="continent">
      <Continent />
    </div>
    <div className="content-container">
      <Contents />
    </div>
  </>
);

export default Home;
