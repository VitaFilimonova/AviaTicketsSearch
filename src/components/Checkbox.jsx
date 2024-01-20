import React, {useEffect} from 'react';
import style from "./Checkbox.module.scss";
import  {Tran} from "../services/Transf";
import {useData} from "../services/API";

const Checkbox = ({element}) => {

    const data = useData()
function manageTransfers() {
    const filteredData = data.filter((el) => {
        return el.transfers === element.id;
    });
    console.log(filteredData)
    }


    return (
        <div>
            <div className={style.form_group}>
                <input type="checkbox" id={element.id} onClick={() => {
                    if (element.id!==4){

                    } else {

                    }
                    manageTransfers()
                }}/>
                <label htmlFor={element.id}>{element.text}</label>
            </div>
        </div>
    )
        ;
};

export default Checkbox;