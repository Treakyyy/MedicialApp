import React from 'react';
import './Modal2.css'
import CardModal2 from './CardModal2';

const Modal2 = ({ closeModal }) => {
    return (
        <div className='Container-Modal2'>
            <button className='Button-Close' onClick={closeModal}>Закрыть</button>
            <p className='Header-Text-Modal2'>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно <br /> среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов1.</p>
            <p className='Text-Modal2'>В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов. <br />2 Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда <br /> и некоторых злокачественных опухолях.</p>
            <h2 className='Title'>Пятилетняя выживаемость пациентов</h2>
            <CardModal2/>
        </div>
    );
};

export default Modal2;