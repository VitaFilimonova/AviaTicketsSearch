import React from 'react';
import style from "./Modal.module.scss"
const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null; // Если модальное окно не открыто, возвращаем null
    }

    return (
        <div className={style.modal__overlay}>
            <div className={style.modal__content}>
                <div>

                </div>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
}

export default Modal; 