import CountriesList from "../CountriesList/CountriesList";
import Filters from "../Filters/Filters";

const Home = () => {
  return (
    <div>
      <Filters />

      <CountriesList />
    </div>
  );
};

export default Home;
