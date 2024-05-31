import React, { useState } from 'react';
import './heroes.scss';
import Stars from '../../Stars/Stars.jsx';
import {heroes as heroesData} from "../../../heroes/heroes.js";


const Heroes = ({onHeroClick}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const heroesPerPage = 9;
    const totalPages = Math.ceil(heroesData.length / heroesPerPage);

    const indexOfLastHero = currentPage * heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - heroesPerPage;
    const currentHeroes = heroesData.slice(indexOfFirstHero, indexOfLastHero);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="heroes-container starry-background">
            <h1 className="title">НЕБЕСНІ ВОЇНИ РОДИНИ ФОЗЗІ ГРУП</h1>
            <div className="search-panel">
                <input type="text" placeholder="ПІБ" />
                <select>
                    <option>Сільпо</option>
                    <option>Холдинг</option>
                    <option>Логістика</option>
                </select>
                <button>Шукати</button>
            </div>
            <div className="heroes-gallery">
                {currentHeroes.map(hero => (
                    <div key={hero.id} className="hero-profile">
                        <img src={hero.img} alt={hero.name} />
                        <div className="hero-info">
                            <h2>{hero.name}</h2>
                            <p>{hero.business}</p>
                            <p>{hero.position}</p>
                            <button onClick={() => onHeroClick(hero.id)}>ВШАНУВАТИ ГЕРОЯ</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>←</button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>→</button>
            </div>
        </div>
    );
};

export default Heroes;
