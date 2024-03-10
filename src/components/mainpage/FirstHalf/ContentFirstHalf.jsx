import React from 'react';
import './ContentFirstHalf.css'
import IconPeople from '../../icon/IconPeople';
import Frame from '../../icon/Frame';
import IconArrow from '../../icon/IconArrow';

const ContentFirstHalf = () => {
    return (
        <div>
            <div className="Content-Container-FirstHalf">
                <IconPeople/>
                <Frame></Frame>
                <p className='Text-Content-First'>В десятилетнем исследовании «Генетическая эпидемиология <br /> ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, <br /> диагностированной до 55 лет, было выявлено преобладание...</p>
            </div>
            <div className="Content-Container-FirstHalf">
                <IconArrow/>
                <Frame></Frame>
                <p className='Text-Content-First'>Большинство пациентов с ХОБЛ столкнется с обострениями: <br /> как минимум одно среднетяжелое или тяжелое обострение <br /> случится в течение...</p>
            </div>
        </div>
    );
};

export default ContentFirstHalf;