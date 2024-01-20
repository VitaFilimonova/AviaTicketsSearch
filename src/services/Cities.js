import React from 'react';
const airportsData = require('./airports.json');
const citiesData = require('./cities.json');

const Cities = ({from='', to='', airport_from='', airport_to=''}) => {

    let cityCodeToSearch = from !== '' ? from : to
    let airportCodeToSearch = airport_from !== '' ? airport_from : airport_to

    function findAirportByCityCode(cityCode, airportCode) {
        const airport = airportsData.find(airport => airport.code === airportCode);
        const city = citiesData.find(city => city.code === cityCode);
        if (airport && city) {
            const cityName = city.name_translations.ru;
            const airportName = airport.code;
            return {cityName, airportName};
        } else {
            return "Аэропорт не найден";
        }
    }

    const russianNames = findAirportByCityCode(cityCodeToSearch ,airportCodeToSearch);
    // const airportRussianName = findAirportByCityCode(cityCodeToSearch);
    // console.log(russianNames)
    return (
        <div>
            <div>
                {russianNames.cityName}
            </div>
            <div>
                {russianNames.airportName}
            </div>

        </div>
    );
};

export default Cities;



