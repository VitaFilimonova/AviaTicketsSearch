import React, {useState} from 'react';
import style from "./Card.module.scss"
import Logos from "../services/Logos";
import Cities from "../services/Cities";
import Modal from "./Modal";

const Card = ({ticket}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
const hours = Math.floor(ticket.duration_to/60)
const minutes = ticket.duration_to - hours*60

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
            <div className={style.logo}>
                <a>
                    {/*<img className={style.logo_img} alt={"logo"}/>*/}
                    <Logos iata={ticket.airline}/>
                </a>
            </div>
            <div>
                <h2 className={style.info}>
                    {ticket.flight_number}
                </h2>
                <p>
                    Пересадки: {ticket.transfers}
                </p>
            </div>
            <div>
                <Cities from={ticket.origin} airport_from={ticket.origin_airport}/>
                {hours}ч. {minutes}мин.
                <Cities to={ticket.destination} airport_to={ticket.destination_airport}/>

            </div>


            <div className={style.price}>
                <p className={style.price_number}>{ticket.price} &#8381;</p>

            </div>
            <button className={style.button}  onClick={openModal}>
                Выбрать
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Card;