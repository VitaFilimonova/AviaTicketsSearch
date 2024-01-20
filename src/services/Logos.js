import React from 'react';

const Logos = ({iata}) => {
    const url = `http://pics.avs.io/150/150/${iata}.png`
    return (
        <div>
            <img src={url} alt='logo-aircompany'/>
        </div>
    );
};

export default Logos;