import React, {useContext, useEffect, useState} from 'react';
import Card from "./Card";
import {useData} from "../services/API";
import style from "./Cards.module.scss"

const Cards = () => {
    const {data, filter,setFilter} = useData();
    const [open, isOpen] = useState(false);

    useEffect(() => {
        if((filter?.length === 0 || data?.length === 0)) {
            isOpen(true)
        } else {
            isOpen(false)
        }
    }, [data,filter]);

    return (
        <div className={style.container}>
            {filter? filter.map(elem => <Card ticket={elem}/> ) : data?.map(elem => <Card ticket={elem}/> )}
           <h2 className={`${style.results} ${open? style.results_open : ''}`}>No results</h2>


        </div>
    );

};

export default Cards;