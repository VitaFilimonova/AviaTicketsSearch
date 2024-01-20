import React from 'react';
import style from "./Transfers.module.scss"
import Checkbox from "./Checkbox";
// import {data} from "../services/API";


const Transfers = () => {
    const transfers = [
        {id: 0, text: 'no transfer'},
        {id: 1, text: '1 transfer'},
        {id: 2, text: '2 transfers'},
        {id: 3, text: '3 transfers'},
        {id: 4, text: 'all'},
    ]
    // data().then(r => console.log(r))
    return (
        <div className={style.container}>
            <h2 className={style.header}>Количество пересадок </h2>
            <div className={style.options}>
                {transfers.map(element =>  <Checkbox element={element} key={element.id} />)}

            </div>
        </div>
    );
};

export default Transfers;