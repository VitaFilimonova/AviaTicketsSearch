import React, {useEffect, useState} from 'react';
import style from "./Transfers.module.scss"
import Checkbox from "./Checkbox";
import {useData} from "../services/API";
// import {data} from "../services/API";


const Transfers = () => {
    const allTransfers = [
        {id: 0, text: 'no transfer'},
        {id: 1, text: '1 transfer'},
        {id: 2, text: '2 transfers'},
        {id: 3, text: '3 transfers'},
        {id: 4, text: 'all'},
    ]

    const {data, filter,setFilter, transfers, setTransfers} = useData()
    const [activeFilters, setActiveFilters] = useState([]);
const [activeAll, setActiveAll] = useState(false)
    function handleFilterClick(element) {
        if (element.id === 4) {
            activeAll? setActiveAll(false) : setActiveAll(true)
        } else {
            // Иначе, добавить/удалить фильтр из списка активных
            if (activeFilters.includes(element.id)) {
                setActiveFilters(activeFilters.filter((filter) => filter !== element.id));
            } else {
                setActiveFilters([...activeFilters, element.id]);
            }
        }
    }

    // useEffect(() => {
    //     if (!activeAll) {
    //         // Если выбраны конкретные фильтры, очищаем список activeFilters
    //         setActiveFilters([]);
    //     }
    // }, [activeAll]);

    useEffect(() => {
        const fu = () => {
            const filteredData = data?.filter((el) => {
                if (activeAll) {
                    return true;
                }
                if (activeFilters.length === 0 || el.id === 4) {
                    return true;
                }
                if (el.id === 4) {
                    setActiveAll(false)
                    return true;

                }

                return activeFilters.includes(el.transfers);
            }

            );

            setFilter(filteredData);
            console.log(filteredData)
            console.log(transfers)
        }
        fu();
        console.log(activeFilters)
        console.log(activeAll)

        // activeFilters.length>0? setTransfers(true) : setTransfers(false)

    }, [activeFilters,activeAll]);

    useEffect(() => {
        setTransfers(activeFilters.length > 0 || activeAll);
        console.log(transfers)
    }, [activeFilters, activeAll]);

    return (
        <div className={style.container}>
            <h2 className={style.header}>Количество пересадок </h2>
            <div className={style.options}>
                {allTransfers.map(element => <Checkbox element={element} key={element.id}
                                                    onClick={() => handleFilterClick(element)}/>)}

            </div>

        </div>
    );
};

export default Transfers;