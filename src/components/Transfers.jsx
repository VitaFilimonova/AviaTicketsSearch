import React, {useEffect, useState} from 'react';
import style from "./Transfers.module.scss"
import Checkbox from "./Checkbox";
import {useData} from "../services/API";
// import {data} from "../services/API";


const Transfers = () => {
    const transfers = [
        {id: 0, text: 'no transfer'},
        {id: 1, text: '1 transfer'},
        {id: 2, text: '2 transfers'},
        {id: 3, text: '3 transfers'},
        {id: 4, text: 'all'},
    ]

    const {data, filter,setFilter} = useData()
    const [activeFilters, setActiveFilters] = useState([]);

    function handleFilterClick(element) {
        if (element.id === 4) {
            // Если выбран фильтр "Все", сбросить активные фильтры
            setActiveFilters([]);
        } else {
            // Иначе, добавить/удалить фильтр из списка активных
            if (activeFilters.includes(element.id)) {
                setActiveFilters(activeFilters.filter((filter) => filter !== element.id));
            } else {
                setActiveFilters([...activeFilters, element.id]);
            }
        }

    }
    useEffect(() => {
        const fu = () => {
            const filteredData = data?.filter((el) => {
                if (activeFilters.length === 0 || el.id ===4) {
                    // Если нет активных фильтров, показать все данные
                    return true;
                }
                // Проверить, соответствует ли текущая запись активным фильтрам'

                return activeFilters.includes(el.transfers);
            });
            setFilter(filteredData)
            console.log(filteredData)
        }
        fu()
        console.log(activeFilters)
    }, [activeFilters]);


    // setData(filteredData)
// console.log(filteredData)
    return (
        <div className={style.container}>
            <h2 className={style.header}>Количество пересадок </h2>
            <div className={style.options}>
                {transfers.map(element => <Checkbox element={element} key={element.id}
                                                    onClick={() => handleFilterClick(element)}/>)}

            </div>

        </div>
    );
};

export default Transfers;