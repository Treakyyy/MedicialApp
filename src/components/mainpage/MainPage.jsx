import React from 'react';
import './MainPage.css'
import FirstHalf from './FirstHalf/FirstHalf';
import SecondHalf from './SecondHalf/SecondHalf';
import Modal1 from '../modalWindow/Modal1';
import Modal2 from '../modalWindow/Modal2';

const MainPage = () => {
    return (
        <div className='Main-Container'>
            <FirstHalf/>
            <SecondHalf/>
            <Modal1/>
            <Modal2/>
        </div>
    );
};

export default MainPage;