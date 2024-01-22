import React, {useState} from 'react';
import style from "./Card.module.scss"
import Logos from "../services/Logos";
import Cities from "../services/Cities";
import Modal from "./Modal";

const Card = ({ticket}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const hours = Math.floor(ticket.duration_to / 60)
    const minutes = ticket.duration_to - hours * 60
const dany = ticket
    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className={style.card}>
            <div className={style.card__description}>
               <div className={style.card__description_mobile}>
                   <Logos className={style.logo__img} iata={ticket.airline}/>
                   <h2 className={style.price_number}>{ticket.price} &#8381;</h2>
               </div>

                <button className={style.button} onClick={openModal}>
                    Выбрать
                </button>
            </div>

            <div className={style.card__destination}>

                <Cities from={ticket.origin} airport_from={ticket.origin_airport}/>
                <span className={style.card__dash}>&mdash;</span>
                <Cities to={ticket.destination} airport_to={ticket.destination_airport}/>

            </div>

            <div className={style.card__time}>
                {hours}ч. {minutes}мин.
                <p>
                    Пересадки: {ticket.transfers}
                </p>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} ticlet={dany}/>
        </div>
    );
};

export default Card;