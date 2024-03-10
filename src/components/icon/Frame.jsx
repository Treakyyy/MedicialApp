import React from 'react';
import IconFrame from '../../img/IconFrame.png';
import IconColorFrame from '../../img/ColorFrame.png';
import './Frame.css'

const Frame = () => {
    return (
        <div className='Frame-Container'>
            <img className='Frame' src={IconColorFrame} alt="" />
            <img className='Frame' src={IconFrame} alt="" />
        </div>
    );
};

export default Frame;