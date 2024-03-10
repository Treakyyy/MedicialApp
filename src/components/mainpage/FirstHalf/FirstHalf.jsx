import React from 'react';
import './FirstHalf.css'
import HeaderFirst from './HeaderFirst';
import ContentFirstHalf from './ContentFirstHalf';


const FirstHalf = () => {
    return (
        <div className='FirstHalf-Container'>
            <HeaderFirst/>
            <ContentFirstHalf/>
        </div>
    );
};

export default FirstHalf;