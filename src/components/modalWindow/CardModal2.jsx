import React from 'react';
import './CardModal2.css'
import Heart from '../icon/Heart';
import PeopleCard from '../icon/PeopleCard';
import Buble from '../icon/Buble';

const CardModal2 = () => {
    return (
        <div className='Conteiner-Card-Modal2'>
            <div className='Card'>
                <Heart/>
                <p className='Card-Number'>45,5%</p>
                <p className='Card-Text-Modal2-Body'>пациентов с сердечной недостаточностью1</p>
                <p className='Card-Text-Modal2-Footer'>Популяционное когортное исследование (N=385)</p>
            </div>
            <div className='Card'>
                <PeopleCard/>
                <p className='Card-Number'>55,3%</p>
                <p className='Card-Text-Modal2-Body'>пациентов с инфарктом миокарда1</p>
                <p className='Card-Text-Modal2-Footer'>Апостериорный анализ когортного исследования (N=2887)</p>
            </div>
            <div className='Card'>
                <Buble/>
                <p className='Card-Number'>50,5%</p>
                <p className='Card-Text-Modal2-Body'>пациентов с раком мочевого пузыря</p>
                <p className='Card-Text-Modal2-Footer'>Исследование Национальной статистической службы (N=42642)</p>
            </div>
        </div>
    );
};

export default CardModal2;