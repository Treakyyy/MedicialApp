import React from 'react';
import './MainPage.css'
import FirstHalf from './FirstHalf/FirstHalf';
import SecondHalf from './SecondHalf/SecondHalf';

const MainPage = () => {
    return (
        <div className='Main-Container'>
            <FirstHalf/>
            <SecondHalf/>
        </div>
    );
};

export default MainPage;