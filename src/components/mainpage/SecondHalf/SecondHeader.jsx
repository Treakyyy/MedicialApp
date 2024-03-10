import React from 'react';
import './SecondHeader.css'
import HeaderImage from '../../icon/HeaderImage';

const SecondHeader = () => {
    return (
        <div className='Header-Container-Second'>
            <HeaderImage/>
            <p className='Header-Text'>Терапия ХОБЛ: что в фокусе?</p>
        </div>
    );
};

export default SecondHeader;