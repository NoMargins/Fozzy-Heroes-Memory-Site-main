import React from 'react';
import backImage from '../../../../img/back.png';

import './head.scss';

const styles = {
    backgroundImage: `url(${backImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

const Head = () => {
    return (
    <div className="head" style={styles}>
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
