import React from 'react';
import Sort from "./Sort";

const Sorts = () => {
    const names = [{label: 'По цене', action: 'false', id:1}, {label: 'по длительности', id:2}]
    return (
        <div>
            {names.map(elem => (
                <Sort name={elem.label} action={elem.action} key={elem.id}/>
            ))}
        </div>
    );
};

export default Sorts;