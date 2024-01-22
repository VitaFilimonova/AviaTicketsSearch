import React from 'react';
import style from "./Checkbox.module.scss";


const Checkbox = ({element, onClick}) => {

    return (
        <>
            <div className={style.form}>
                <input type="checkbox" id={element.id} onClick={() => {
                    if (onClick) {
                        onClick(element);
                    }
                }}/>
                <label htmlFor={element.id}>{element.text}</label>
            </div>
        </>
    )
        ;
};

export default Checkbox;