import { useState } from "react";
import "../Country/country.css";
const Country = ({country, handleVisitedCountry}) => {
  const { name, flags, capital, continents, population } = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  console.log(handleVisitedCountry)

  return (

    
    <div className={`country ${visited ? "visited" : ""}`}>
        <h3></h3>
      <h3
        style={{
          backgroundColor: visited ? "skyBlue" : "",
          color: visited ? "black" : "",
        }}
        className="highlight"
      >
        {" "}
        {name?.common}
      </h3>
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
          <button style={{marginLeft: '5px'}} onClick={() => {handleVisitedCountry(country.name.common)}} >Mark Visited</button>
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
