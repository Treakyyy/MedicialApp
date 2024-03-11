import React, { useState } from 'react';
import './ContentFirstHalf.css'
import IconPeople from '../../icon/IconPeople';
import IconArrow from '../../icon/IconArrow';
import Finger1 from '../../icon/Finger1';
import Finger2 from '../../icon/Finger2';
import Modal1 from '../../modalWindow/Modal1';
import Modal2 from '../../modalWindow/Modal2';
import Frame1 from '../../icon/Frame1';
import Frame2 from '../../icon/Frame2';

const ContentFirstHalf = () => {

    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const openModal1 = () => {
        setIsModalOpen1(true);
    };

    const closeModal1 = () => {
        setIsModalOpen1(false);
    };
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const openModal2 = () => {
        setIsModalOpen2(true);
    };

    const closeModal2 = () => {
        setIsModalOpen2(false);
    };

    return (
        <div>
            <div className="Content-Container-FirstHalf">
                <IconPeople/>
                <Frame1/>
                <p className='Text-Content-First'>В десятилетнем исследовании «Генетическая эпидемиология <br /> ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, <br /> диагностированной до 55 лет, было выявлено преобладание...</p>
                <button className='Finger-Btn' onClick={openModal1}><Finger1/></button>
            </div>
            <div className="Content-Container-FirstHalf">
                <IconArrow/>
                <Frame2/>
                <p className='Text-Content-First'>Большинство пациентов с ХОБЛ столкнется с обострениями: <br /> как минимум одно среднетяжелое или тяжелое обострение <br /> случится в течение...</p>
                <button className='Finger-Btn'  onClick={openModal2}><Finger2/></button>
            </div>
            {isModalOpen1 && <Modal1 closeModal={closeModal1} />}
            {isModalOpen2 && <Modal2 closeModal={closeModal2} />}
        </div>
    );
};

export default ContentFirstHalf;