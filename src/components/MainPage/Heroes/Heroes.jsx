import React, { useState, useEffect } from 'react';
import './heroes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { heroes as heroesData } from "../../../heroes/heroes.js";
import { getUniqueBusinesses, filterHeroes, filterNames } from "../../../utils/heroesUtils.js";

const Heroes = ({ onHeroClick }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [business, setBusiness] = useState('Усі бізнеси');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);
    const [filteredHeroes, setFilteredHeroes] = useState(heroesData);
    const heroesPerPage = window.innerWidth < 768 ? heroesData.length : 9;
    const isDesktop = window.innerWidth >= 768;

    useEffect(() => {
        // Фільтрування героїв на основі вибраного бізнесу та пошукового запиту
        const updateFilteredHeroes = () => {
            if (searchQuery === '') {
                setFilteredNames([]);
                setFilteredHeroes(filterHeroes(heroesData, business, ''));
            } else {
                const names = filterNames(heroesData, searchQuery);
                setFilteredNames(names);
                setFilteredHeroes(filterHeroes(heroesData, business, searchQuery));
            }
        };
        updateFilteredHeroes();
    }, [searchQuery, business]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [filteredHeroes.length, currentPage]);

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

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    const handleNameClick = (name) => {
        setSearchQuery(name);
        setFilteredNames([]);
        setFilteredHeroes(filterHeroes(heroesData, business, name));
    };

    const handleHeroClick = (id, hero) => {
        setSearchQuery('');
        setFilteredNames([]);
        setFilteredHeroes(heroesData);
        onHeroClick(id, hero);
    };

    const uniqueBusinesses = getUniqueBusinesses(heroesData);
    const totalPages = Math.ceil(filteredHeroes.length / heroesPerPage);
    const indexOfLastHero = currentPage * heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - heroesPerPage;
    const currentHeroes = filteredHeroes.slice(indexOfFirstHero, indexOfLastHero);

    return (
        <div className="heroes-container">
            <h1 className="title">НЕБЕСНІ ВОЇНИ РОДИНИ FOZZY GROUP</h1>
            <div className="search-panel">
                <FontAwesomeIcon icon={faSliders} style={{ color: "#ffffff" }} />
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="ПІБ"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        style={{ color: '#fff' }}
                    />
                    {filteredNames.length > 0 && (
                        <ul className="dropdown">
                            {filteredNames.map((name, index) => (
                                <li key={index} onClick={() => handleNameClick(name)}>
                                    {name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <select onChange={(e) => setBusiness(e.target.value)} value={business}>
                    {uniqueBusinesses.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <div className='heroes'>
                {filteredHeroes.length === 0 ? 
                ( <p className="no-heroes-message">Дані не знайдено.</p> ) :
                  ( <div className="heroes-gallery">
                    {currentHeroes.map(hero => (
                        <div key={hero.id} className="hero-profile">
                            <img src={hero.img} alt={hero.name} />
                            <div className="hero-info">
                                <h2>{hero.name}</h2>
                                <p style={{ lineHeight: '20px' }}>{hero.position} {hero.rank !== '' && '/'}</p>
                                {hero.rank !== '' && <p style={{ lineHeight: '20px' }}>{hero.rank}</p>}
                                <button onClick={() => handleHeroClick(hero.id, hero)}>ВШАНУВАТИ ГЕРОЯ</button>
                            </div>
                        </div>
                    ))}
                    </div>
                )}
            </div>
            {isDesktop && filteredHeroes.length > 0 && (
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>←</button>
                    <span>{currentPage} / {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>→</button>
                </div>
            )}
        </div>
    );
};

export default Heroes;
