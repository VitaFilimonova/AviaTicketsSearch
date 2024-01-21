import React, {useState} from 'react';
import Sort from "./Sort";
import style from "./Sort.module.scss";

const Sorts = () => {
    const names = [{label: 'По цене', action: 'false', id:1}, {label: 'по длительности', id:2}]
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (id) => {
        setActiveButton(id === activeButton ? '' : id);
    };
    return (
        <div className={style.container}>
            {names.map(elem => (
                <Sort  id={elem.id} name={elem.label}  isActive={elem.id === activeButton}
                      onClick={() => handleButtonClick(elem.id)} key={elem.id}/>
            ))}
        </div>
    );
};

export default Sorts;