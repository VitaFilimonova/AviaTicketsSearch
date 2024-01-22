import React from "react";
import './App.scss';
import './reset.scss'
import Transfers from "./components/Transfers/Transfers";
import Sorting from "./components/Sorting/Sorting";
import Cards from "./components/Cards/Cards";
import airplane from './images/airplane.svg'

function App() {
    return (
        <div className="container">
            <img className='container__img' src={airplane} alt={'airplane'}/>
            <div className="container__sorting">
                <Sorting/>
            </div>
            <div className="container__main">
                <Transfers/>
                <Cards/>
            </div>
        </div>
    );
}

export default App;
