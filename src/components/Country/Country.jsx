import "../Country/country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags, capital, continents, population } = country;
  return (
    <div className="country">
      <h3 className="highlight"> {name?.common}</h3>
      <div className="flex">

      <div>
        <h4>Official Name: {name.official} </h4>
        <p> Capital : {capital}</p>
        <p> Continets: {continents}</p>
        <p> Population: {population}</p>
      </div>
      <div>
        <img src={flags.png} alt="" />
      </div>
      </div>
    </div>
  );
};

export default Country;
