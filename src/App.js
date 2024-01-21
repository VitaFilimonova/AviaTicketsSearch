import React, {useEffect} from "react";
import './App.scss';
import './reset.scss'
import Transfers from "./components/Transfers";
import Sorts from "./components/Sorts";
import Cards from "./components/Cards";


function App() {

    return (
        <div className="container">
<div className="container__elem">
    <Sorts/>
</div>

            <div className="container__el">
                <Transfers/>
                <Cards/>
            </div>

        </div>
    );
}

export default App;
