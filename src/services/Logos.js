import React from 'react';
import style from "../components/Cards/Card.module.scss"

const Logos = ({iata}) => {
    const url = `https://pics.avs.io/150/150/${iata}.png`
    return (
        <img className={style.logo__img} src={url} alt='logo-aircompany'/>
    );
};

export default Logos;