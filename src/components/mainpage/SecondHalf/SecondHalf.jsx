import React from 'react';
import './SecondHalf.css'
import SecondHeader from './SecondHeader';
import MainLine from './MainLine';
import ContentSecondHalf from './ContentSecondHalf';
import FooterSecondHalf from './FooterSecondHalf';

const SecondHalf = () => {
    return (
        <div className='SecondHalf-Container'>
            <SecondHeader/>
            <MainLine/>
            <ContentSecondHalf/>
            <FooterSecondHalf/>
        </div>
    );
};

export default SecondHalf;