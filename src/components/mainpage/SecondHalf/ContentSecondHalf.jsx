import React from 'react';
import './ContentSecondHalf.css'
import IconInhaler1 from '../../icon/IconInhaler1';
import IconInhaler2 from '../../icon/IconInhaler2';
import IconInhaler3 from '../../icon/IconInhaler3';

const ContentSecondHalf = () => {
    return (
        <div className='Head-Inhaler-Container'>
            <div className='Inhaler-Container'>
                <IconInhaler1/>
                <h4 className='Text-Inhaler'>Ингаляционный <b>антихолинергик</b></h4>
                <p className='Text-Paragraph-Inhaler'>Ингибирует <br /> бронхоконстрикторные <br /> эффекты ацетилхолина,<br /> вступая с ним в конкурентный <br /> антагонизм за взаимодействие <br /> с эффекторными <br /> мускариновыми рецепторами,<br /> дополняет и потенцирует <br /> эффект β2-агонистов1</p>
            </div>
            <div className='Inhaler-Container'>
                <IconInhaler2/>
                <h4 className='Text-Inhaler'>Ингаляционный <br /> <b>β2-агонист</b></h4>
                <p className='Text-Paragraph-Inhaler'>Вызывает бронходилатацию<br /> посредством релаксации <br /> гладкомышечных клеток <br /> бронхов независимо от <br /> характера констриктивных <br /> стимулов, т. е. выступают в <br /> качестве функциональных <br /> антагонистов <br /> бронхоконстрикции</p>
            </div>
            <div className='Inhaler-Container'>
                <IconInhaler3/>
                <h4 className='Text-Inhaler'>Ингаляционный <b>глюкокортикостероид</b> <br /> (ИГКС)</h4>
                <p className='Text-Paragraph-Inhaler'>Снижает частоту обострений, <br /> особенно в сочетании с ДДБА, <br /> подавляют хроническое <br /> воспаление при астме и <br /> снижают гиперреактивность <br /> дыхательных путей</p>
            </div>
        
        </div>
    );
};

export default ContentSecondHalf;