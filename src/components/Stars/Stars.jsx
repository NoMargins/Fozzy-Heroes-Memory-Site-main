import React from "react";
import './stars.scss';

const Stars = () => {
   return (
    <div className="stars">
    {Array.from({ length: 100 }).map((_, i) => (
        <div
            key={i}
            className="star"
            style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
            }}
        />
    ))}
</div>
   )
}
    export default Stars;
