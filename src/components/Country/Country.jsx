import { useState } from "react";
import "../Country/country.css";
const Country = ({ country }) => {
  const { name, flags, capital, continents, population } = country;

  const [visited, setVisited] = useState();

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className="country">
      <h3 className="highlight"> {name?.common}</h3>
      <div className="">
        <div className="">
          <img className="image" src={flags.png} alt="" />
        </div>
        <div>
          <h4>Official Name: {name.official} </h4>
          <p> Capital : {capital}</p>
          <p> Continets: {continents}</p>
          <p> Population: {population}</p>
          <button
            onClick={() => {
              handleVisited();
            }}
          >
            {visited ? "Visited" : "Visit"}
          </button>
        </div>
        <div className="visit">
          {visited
            ? "       You have visited this Country"
            : "           I want to visit"}
        </div>
      </div>
    </div>
  );
};

export default Country;
