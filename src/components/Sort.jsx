import React, {useState} from 'react';
import style from './Sort.module.scss'

const Sort = ({name, action}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <button className={`${style.button} ${
                isActive ? style.button_active : ""}`} onClick={() => {
                setIsActive(true);
                
            }}>
                {name}
            </button>
        </div>
    );
};

export default Sort;