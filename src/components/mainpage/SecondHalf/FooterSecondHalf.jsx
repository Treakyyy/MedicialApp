import React from 'react';
import './FooterSecondHalf.css'

const FooterSecondHalf = () => {
    return (
        <div className='Footer-Container'>
            <div className='Footer-Container-Content'>
                <p className='Footer-Text'>Пациентам с ХОБЛ рекомендуется <br /> комбинирование бронходилататоров с <br /> разными механизмами действия; <br /> Назначение 2-х бронходилататоров из <br /> группы длительнодействующих β2-агонистов <br /> (ДДБА) и длительнодействующих <br /> антихолинергиков (ДДАХ), действие которых <br /> дополняет и усиливает друг друга1.</p>
            </div>
            <div className='Footer-Container-Content'>
                <p className='Footer-Text'>Пациентам с ХОБЛ и частыми обострениями <br /> (≥2 среднетяжелых обострений в течение 1 <br /> года/1 тяжелое обострение, потребовавшее <br /> госпитализации) рекомендуется назначение <br /> ИГКС в дополнение к ДДБА; <br /> Последние исследования показали, что <br /> амбулаторное применение ИГКС/ДДБА у <br /> пациентов с ХОБЛ снижает госпитальную<br /> летальность по сравнению с пациентами, <br /> принимавшими только ДДБА (8,1% vs 13,2%)1.</p>
            </div>
        </div>
    );
};

export default FooterSecondHalf;