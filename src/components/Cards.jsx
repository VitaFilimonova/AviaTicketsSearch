import React, {useContext} from 'react';
import Card from "./Card";
import {useData} from "../services/API";
import style from "./Cards.module.scss"

const Cards = () => {
    const {data, filter,setFilter} = useData()
    return (
        <div className={style.container}>
            {filter? filter.map(elem => <Card ticket={elem}/> ) : data?.map(elem => <Card ticket={elem}/> )}
            {/*{data?.map(elem => <Card ticket={elem}/> )}*/}


        </div>
    );

};

export default Cards;