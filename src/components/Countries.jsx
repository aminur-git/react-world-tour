import React, { useEffect, useState } from "react";
import Country from "./Country/Country";
import "../components/Country/countries.css"

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="headers " >
      <h3>Countries : {countries.length} </h3>
      <div className="country-conrainer">
      {countries.map((country) => (
        <Country country={country} key={country.cca3}></Country>
      ))}
      </div>
    </div>
  );
};

export default Countries;
