import React from "react";
import './stars.scss';

const Stars = () => {
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

    return (
        <div className="stars">
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
        </div>
    );
};

export default Stars;
