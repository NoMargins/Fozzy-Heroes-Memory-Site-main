import React from 'react';
import './head.scss';

const generateRandomStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
        const size = `${Math.random() * 3 + 1}px`; // Sizes between 1px and 4px
        const color = '#fff';
        const x = `${Math.random() * 100}vw`;
        const y = `${Math.random() * 100}vh`;
        const delay = `${Math.random() * 5}s`;

        stars.push({ size, color, x, y, delay });
    }
    return stars;
};

const stars = generateRandomStars(100);

const Head = ({ scrollY }) => {
    return (
        <div className="head">
            <div className="starry-background">
                {stars.map((star, index) => (
                    <div
                        key={index}
                        className="star"
                        style={{
                            width: star.size,
                            height: star.size,
                            backgroundColor: star.color,
                            top: star.y,
                            left: star.x,
                            animationDelay: star.delay,
                        }}
                    />
                ))}
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
        </div>
    );
};

export default Head;
