import React, { useEffect, useState } from "react";
import Country from "./Country/Country";
import "../components/Country/countries.css"

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

    const handleVisitedCountry = country => {
      console.log(country)
      const newVisitedCountries = [...visitedCountries, country]
      setVisitedCountries(newVisitedCountries)
    }


  return (
    <div className="headers " >
      <h3>Countries : {countries.length} </h3>
      <div>
        {
          visitedCountries.map(country => <li>{country}</li>)
        }
      
      </div>
      <div className="country-conrainer">
      {countries.map((country) => (
        <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry}></Country>
      ))}
      </div>
    </div>
  );
};

export default Countries;
