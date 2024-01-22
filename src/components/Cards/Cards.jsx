import React, {useEffect, useState} from 'react';
import Card from "./Card";
import {useData} from "../../services/API";
import style from "./Cards.module.scss"

const Cards = () => {
    const {data, filter} = useData();
    const [open, isOpen] = useState(false);

    useEffect(() => {
        if ((filter?.length === 0 || data?.length === 0)) {
            isOpen(true)
        } else {
            isOpen(false)
        }
    }, [data, filter]);

    return (
        <div className={style.cards}>
            {filter ? filter.map(elem => <Card ticket={elem} key={elem.link}/>) : data?.map(elem => <Card ticket={elem} key={elem.link}/>)}
            <div className={`${style.cards__result} ${open ? style.cards__result_open : ''}`}>
                <h2 className={style.cards__header}>No results</h2>
            </div>
        </div>
    );
};

export default Cards;