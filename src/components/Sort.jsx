import React, {useEffect, useState} from 'react';
import style from './Sort.module.scss'
import Sorting from "../services/Sorting";
import {useData} from "../services/API";

const Sort = ({name, action, isActive, onClick, id}) => {
    const { data, filter, setFilter, transfers } = useData();
const [originData, setOriginData] = useState(filter)
    const [isSorted, setIsSorted] = useState(false);

    useEffect(() => {
        // Обновляем originData только если filter изменился и сортировка не была применена
        // if (!isSorted) {
            setOriginData(filter);
        // }


    }, [ transfers ]);
    console.log(originData)
    useEffect(() => {
       if ( isActive ) {
           // const sortedData = Sorting(data, id, isActive,filter);
           // setFilter(sortedData);
           // setIsSorted(true);
           applySorting()
       } else {
           if(filter?.length>0 ) {
               setFilter(originData)}
           setIsSorted(false)
           // else { setOriginData(data); setFilter(originData)}

       }

    }, [isActive, id, originData, isSorted,]);

    // useEffect(() => {
    //     if (isSorted) {
    //         applySorting();
    //     }
    // }, [isSorted, ]);

const applySorting = () => {
    const sortedData = Sorting(data, id, isActive,filter);
    setFilter( sortedData);
    setIsSorted(true);
}




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