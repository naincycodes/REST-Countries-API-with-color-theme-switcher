import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { countriesData } from './countriesData'
import './IndividualCountryCard.css'

const IndividualCountryCard = ({ selectedCountry }) => {
  const { country } = useParams()

  const currentCountry = countriesData?.find((el) => el.name.common === country)
  // console.log(currentCountry)

  const nativeName =
    currentCountry?.name?.nativeName?.[
      Object.keys(currentCountry.name.nativeName)[0]
    ].common
  const currencies =
    currentCountry?.currencies?.[Object.keys(currentCountry.currencies)[0]].name
  const languages =
    currentCountry?.languages &&
    Object.keys(currentCountry.languages)
      .map((key) => currentCountry.languages[key])
      .join(', ')

  const borderCountriesCode = currentCountry?.borders
  const borderCountries = borderCountriesCode?.map((countryCode) => {
    return countriesData?.find((el) => el.cca3 === countryCode)?.name.common
  })

  return (
    <div className='country-card-parent-container'>
      <div className='back-btn'>
        <Link to={`/`}>&#10229; Back</Link>
      </div>
      <div className='individual-country-card-container'>
        <div className='country-flag-image'>
          <img
            src={currentCountry.flags.png}
            alt={currentCountry.name.common}
          />
        </div>
        <div className='country-details'>
          <h2 className='country-name'>{currentCountry.name.common}</h2>
          <div className='country-description'>
            <div className='country-description-part-1'>
              <div>
                <strong>Native Name:</strong> {nativeName || 'N/A'}
              </div>
              <div>
                <strong>Population:</strong>{' '}
                {currentCountry?.population.toLocaleString('en-IN') || 'N/A'}
              </div>
              <div>
                <strong>Region:</strong> {currentCountry.region || 'N/A'}
              </div>
              <div>
                <strong>Sub Region:</strong> {currentCountry.subregion || 'N/A'}
              </div>
              <div>
                <strong>Capital:</strong> {currentCountry.capital || 'N/A'}
              </div>
            </div>
            <div className='country-description-part-2'>
              <div>
                <strong>Top Level Domain:</strong> {currentCountry.tld[0] || 'N/A'}
              </div>
              <div>
                <strong>Currencies:</strong> {currencies || 'N/A'}
              </div>
              <div>
                <strong>Languages:</strong> {languages || 'N/A'}
              </div>
            </div>
          </div>
          <div className='country-border-countries'>
            <strong>Border Countries:</strong>
            {borderCountries?.map((borderCountry) => (
              <div className='border-country-each'>{borderCountry}</div>
            )) || 'N/A' }
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndividualCountryCard
