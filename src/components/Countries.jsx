import React, { useEffect, useState } from "react";
import Country from "./Country/Country";
import "../components/Country/countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (country) => {
    console.log(country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flags) => {
    console.log("Flags working");
  };

  return (
    <div className="headers ">
      <h3>Countries : {countries.length} </h3>
      {/* visited Country */}
      <div>
        {visitedCountries.map((country) => (
          <li>{country}</li>
        ))}
      </div>
      {/* Display Country */}
      <div className="country-conrainer">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
