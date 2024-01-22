import React from "react";
import './App.scss';
import './reset.scss'
import Transfers from "./components/Transfers";
import Sorts from "./components/Sorts";
import Cards from "./components/Cards";
import airplane from './airplane.svg'

function App() {
    return (
        <div className="container">
            <img className='container__img' src={airplane}/>
            <div className="container__sorting">
                <Sorts/>
            </div>
            <div className="container__main">
                <Transfers/>
                <Cards/>
            </div>
        </div>
    );
}

export default App;
