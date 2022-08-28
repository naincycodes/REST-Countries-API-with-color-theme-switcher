import React from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";

const CountryCard = ({ country }) => {
 
  return (
    <Link to={`/${country.name.common}`} className="card-container">
      <div className="country-flag">
        <img src={country.flags.png} alt={country.name.common} />
      </div>
      <div className="country-summary">
        <h2 className="country-name">{country.name.common}</h2>
        <div className="country-demographics">
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString("en-IN")}
        </div>
        <div className="country-demographics">
          <strong>Region:</strong> {country.region}
        </div>
        <div className="country-demographics">
          <strong>Capital:</strong> {country.capital}
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
