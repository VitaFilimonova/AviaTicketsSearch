import React from 'react';
import style from "./Modal.module.scss"
const Modal = ({ isOpen, onClose, ticket }) => {
    if (!isOpen) {
        return null; // Если модальное окно не открыто, возвращаем null
    }
console.log(ticket)
    return (
        <div className={style.modal}>
            <div className={style.modal__content}>
                <div>
                    {ticket}
                </div>
                <button className={style.modal__close} onClick={onClose}>&#10006;</button>
            </div>
        </div>
    );
}

export default Modal; 