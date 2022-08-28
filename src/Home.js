import React, { useState } from "react";
import CountryCard from "./CountryCard";
import searchIcon from "./images/search-bar.png";
import { countriesData } from "./countriesData";

export default function Home() {
  const [filteredCountries, setFilteredCountries] = useState(countriesData)
  function showFilteredCountries(e) {
    const countryRegionValue = e.target.value
    if(countryRegionValue === "All") {
      setFilteredCountries(countriesData)
    } else {
      setFilteredCountries(
        countriesData?.filter(country => {
          return country.region === countryRegionValue
        }
        )
      )
    }
  }
  return (
    <>
      <div className="search-and-filter-container">
        <div className="search-bar">
          <img src={searchIcon} alt="search bar icon" />
          <input
            type="search"
            size="40"
            placeholder="Search for a country..."
          />
        </div>
        <div className="filterCountries">
          <select onChange={showFilteredCountries}>
            <option value="All" hidden>Filter by Region</option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="country-card-parent">
        {filteredCountries?.map((country, i) => (
          <CountryCard country={country} />
        ))}
      </div>
    </>
  )
}
