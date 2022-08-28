import React from 'react'
import { useParams } from "react-router-dom"
import { countriesData } from "./countriesData";

const IndividualCountryCard = ({ selectedCountry }) => {
  const { country } = useParams()

  const currentCountry = countriesData?.find((el) => el.name.common === country)
  const nativeName = currentCountry.name.nativeName[Object.keys(currentCountry.name.nativeName)[0]].common
  const currencies = currentCountry.currencies[Object.keys(currentCountry.currencies)[0]].name
  const languages = Object.keys(currentCountry.languages).map(key => currentCountry.languages[key]).join(', ')

  console.log(currentCountry);

  return (
    <div>
      <button>&#10229; Back</button>
      <div className="country-card-container">
        <div className='country-flag-image'>
          <img src={currentCountry.flags.png} alt={currentCountry.name.common} />
        </div>
        <div className='country-details'>
          <h2 className='country-name'>{currentCountry.name.common}</h2>
          <div className='country-description'>
            <div className='country-description-part-1'>
              <div>
                <strong>Native Name:</strong> {nativeName}
              </div>
              <div>
                <strong>Population:</strong> {currentCountry.population.toLocaleString('en-IN')}
              </div>
              <div>
                <strong>Region:</strong> {currentCountry.region}
              </div>
              <div>
                <strong>Sub Region:</strong> {currentCountry.subregion}
              </div>
              <div>
                <strong>Capital:</strong> {currentCountry.capital}
              </div>

            </div>
            <div className='country-description-part-2'>
              <div>
                <strong>Top Level Domain:</strong> {currentCountry.tld[0]}
              </div>
              <div>
                <strong>Currencies:</strong> {currencies}
              </div>
              <div>
                <strong>Languages:</strong> {languages}
              </div>
            </div>

          </div>
        </div>
        <div className='country-border-countries'>
          <div>
            <strong>Border Countries:</strong> { }
          </div>
        </div>

      </div>


    </div>
  )
}

export default IndividualCountryCard