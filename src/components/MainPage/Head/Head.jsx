import React from 'react';
import Stars from '../../Stars/Stars';
import './head.scss';

const Head = ({ scrollY }) => {
    return (
        <div className="head">
            {/* <div className="starry-background head-back"> */}
            <div className="head-back">
                {/* <div className='head-stars' style={{position: 'relative'}}> */}
            {/* <Stars /> */}
                <p className="top-text">ГЕРОЇ НЕ ВМИРАЮТЬ!</p>
                <div className="text-content">
                    <h2 className="subtitle">ПОРТАЛ</h2>
                    <div className="oval">
                        <h1 className="main-title">ПАМʼЯТІ</h1>
                    </div>
                    <h2 className="subtitle second">СМІЛИВОВЕРШНИКІВ</h2>
                </div>
                {/* <div className="scroll-down head">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16L6 8H18L12 16Z" fill="currentColor" />
                    </svg>
                </div> */}
                </div>
            {/* </div> */}
        </div>
    );
};

export default Head;
