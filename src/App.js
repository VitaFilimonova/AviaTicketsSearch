import React, {useEffect} from "react";
import './App.scss';
import './reset.scss'
import Card from "./components/Card";
import Transfers from "./components/Transfers";
// import { loadCurrencyRates} from "./services/API";
import axios from "axios";
import Sorts from "./components/Sorts";
import Cards from "./components/Cards";
// import {loadCurrencyRates} from "./services/API";

function App() {
let name
    // useEffect(() => {
        // const url = 'https://front-test.dev.aviasales.ru/search';
        // axios.get(url)
        //     .then(response => {
        //         name = response;
        //         console.log(name)
        //         console.log('hghghghghghg')
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     });
        // loadCurrencyRates()
    // }, []);
    return (
        <div className="container">
            {/*<Fetch/>*/}
            <Sorts/>
            <Transfers/>
            <Cards/>
        </div>
    );
}

export default App;
