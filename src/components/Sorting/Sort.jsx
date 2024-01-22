import React, {useEffect, useState} from 'react';
import style from './Sort.module.scss'
import Sorting from "../../services/Sorting";
import {useData} from "../../services/API";

const Sort = ({name, isActive, onClick, id}) => {
    const {data, filter, setFilter, transfers} = useData();
    const [originData, setOriginData] = useState(filter)
    const [isSorted, setIsSorted] = useState(false);

    useEffect(() => {
        setOriginData(filter);
    }, [transfers]);

    useEffect(() => {
        if (isActive) {
            applySorting()
        } else {
            if (filter?.length > 0) {
                setFilter(originData)
            }
            setIsSorted(false)
        }
    }, [isActive, id, originData, isSorted,]);
    const applySorting = () => {
        const sortedData = Sorting(data, id, isActive, filter);
        setFilter(sortedData);
        setIsSorted(true);
    }

    return (
        <div>
            <button className={`${style.button} ${isActive ? style.button_active : ''}`}
                    onClick={() => {
                        onClick(id);
                    }}
            >
                {name}
            </button>
        </div>
    );
};

export default Sort;