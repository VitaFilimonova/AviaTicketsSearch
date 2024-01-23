import React from 'react';
import style from "./Modal.module.scss"
import airplane from "../../images/airplane-modal.svg";

const Modal = ({isOpen, onClose, ticketFlightNumber, ticketLink}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                <p className={style.modal__flightNum}>
                    Номер рейса: <strong>{ticketFlightNumber} </strong>
                </p>
                <p>Приобрести билет можно по ссылке: <a href={`https://www.aviasales.ru/${ticketLink}`}>https://www.aviasales.ru/</a></p>
                <div className={style.modal__logo}>
                    <img className={style.modal__logo_img} src={airplane} alt={'airplane'}/>
                </div>
                <button className={style.modal__close} onClick={onClose}>&#10006;</button>
            </div>
        </div>
    );
}

export default Modal; 