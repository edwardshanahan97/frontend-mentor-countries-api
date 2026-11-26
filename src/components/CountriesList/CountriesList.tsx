import countries from "../../data/data.json";

const CountriesList = () => {
  return (
    <div>
      {countries.map(({ name }) => (
        <div>{name}</div>
      ))}
    </div>
  );
};

export default CountriesList;
