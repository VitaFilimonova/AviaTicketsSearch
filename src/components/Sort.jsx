import React, {useEffect, useState} from 'react';
import style from './Sort.module.scss'
import Sorting from "../services/Sorting";
import {useData} from "../services/API";

const Sort = ({name, action, isActive, onClick, id}) => {
    const { data, filter, setFilter, transfers } = useData();

    useEffect(() => {
       if ( id === 2) {
           const sortedData = Sorting(filter, id, isActive, transfers);
           setFilter(sortedData);
       }

    }, [isActive, id]);




// useEffect(()=> {
//     if(data || filter) {
//         if (isActive) {
//             const handleButtonClick = () => {
//                 if (id === 2) {
//                     let sortedFilter
//                     if (filter) {
//                         sortedFilter = [...filter];
//                     } else {
//                         sortedFilter = [...data];
//                     }
//
//                     sortedFilter.sort((a, b) => a.duration_to - b.duration_to);
//                     setFilter(sortedFilter)
//                 }
//             }
//             handleButtonClick()
//         } else {
//             return setFilter(filter)
//         }
//         }
//
//
//
// }, [isActive])


    return (
        <div >
            <button className={`${style.button} ${isActive ? style.button_active : ''}`}
                    onClick={() => {onClick(id); }}
                
            >
                {name}
            </button>
        </div>
    );
};

export default Sort;