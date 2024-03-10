import React from 'react';
import './HeaderFirst.css'
import HeaderImage from '../../icon/HeaderImage';

const HeaderFirst = () => {
    return (
        <div className='Header-Container-First'>
            <HeaderImage/>
            <p className='Header-Text'>ХОБЛ: мифы и реальность</p> 
        </div>
    );
};

export default HeaderFirst;