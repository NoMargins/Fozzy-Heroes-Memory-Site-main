import React from 'react';
import Stars from '../../Stars/Stars';
import './head.scss';

const Head = ({ scrollY }) => {
    return (
        <div className="head">
             <p className="top-text">ГЕРОЇ НЕ ВМИРАЮТЬ!</p>
            <div className="head-back">
                <div className="text-content">
                    <h2 className="subtitle">ПОРТАЛ</h2>
                    <div className="oval">
                        <h1 className="main-title">ПАМʼЯТІ</h1>
                    </div>
                    <h2 className="subtitle second">СМІЛИВОВЕРШНИКІВ</h2>
                </div>
            </div>
        </div>
    );
};

export default Head;
