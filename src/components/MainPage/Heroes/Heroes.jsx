import React, { useState, useEffect, useRef } from 'react';
import './heroes.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpAZ, faArrowDownAZ } from '@fortawesome/free-solid-svg-icons';
import { heroes as heroesData } from "../../../heroes/heroes.js";
import { useNavigate } from 'react-router-dom';

// Функція для перемішування масиву
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Heroes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [business, setBusiness] = useState('Усі бізнеси');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);
    const [filteredHeroes, setFilteredHeroes] = useState(shuffleArray([...heroesData]));
    const [isStraightAlphabetic, setIsStraightAlphabetic] = useState(null); // Початковий стан не визначений
    const heroesPerPage = window.innerWidth < 768 ? heroesData.length : 9;
    const isDesktop = window.innerWidth >= 768;
    const navigate = useNavigate();
    const heroesContainerRef = useRef(null); // Ref для контейнера героїв

    const getUniqueBusinesses = (heroesData) => {
        return ['Усі бізнеси', ...heroesData.reduce((acc, hero) => {
            if (!acc.includes(hero.business)) {
                acc.push(hero.business);
            }
            return acc;
        }, [])];
    };

    const filterHeroes = (heroesData, business, searchQuery) => {
        let filtered = heroesData
            .filter(hero => 
                (business === 'Усі бізнеси' || hero.business === business) && 
                hero.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

        if (isStraightAlphabetic !== null) {
            if (isStraightAlphabetic) {
                filtered = filtered.sort((a, b) => a.name.localeCompare(b.name, 'uk', { sensitivity: 'base' }));
            } else {
                filtered = filtered.sort((a, b) => b.name.localeCompare(a.name, 'uk', { sensitivity: 'base' }));
            }
        } else {
            filtered = shuffleArray(filtered);
        }

        return filtered;
    };

    const filterNames = (heroesData, query) => {
        return heroesData
            .map(hero => hero.name)
            .filter(name => name.toLowerCase().includes(query.toLowerCase()));
    };

    useEffect(() => {
        const updateFilteredHeroes = () => {
            setFilteredHeroes(filterHeroes([...heroesData], business, searchQuery));
            if (searchQuery === '') {
                setFilteredNames([]);
                setCurrentPage(1);
            } else {
                const names = filterNames([...heroesData], searchQuery);
                setFilteredNames(names);
            }
        };
        updateFilteredHeroes();
    }, [searchQuery, business, isStraightAlphabetic]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [filteredHeroes.length, currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            heroesContainerRef.current.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до вершини компонента
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            heroesContainerRef.current.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до вершини компонента
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    };

    const handleNameClick = (name) => {
        setFilteredNames([]); // Очистити пропозиції після вибору
    };

    const handleHeroClick = (id) => {
        setSearchQuery('');
        setFilteredNames([]);
        setFilteredHeroes(shuffleArray([...heroesData]));
        navigate(`/details/${id}`);
    };

    const handleSortChange = () => {
        if (isStraightAlphabetic === null || isStraightAlphabetic === false) {
            setIsStraightAlphabetic(true);
        } else {
            setIsStraightAlphabetic(false);
        }
    };

    const uniqueBusinesses = getUniqueBusinesses(heroesData);
    const totalPages = Math.ceil(filteredHeroes.length / heroesPerPage);
    const indexOfLastHero = currentPage * heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - heroesPerPage;
    const currentHeroes = filteredHeroes.slice(indexOfFirstHero, indexOfLastHero);

    return (
        <div className="heroes-container" ref={heroesContainerRef}>
            <div className="stars"></div>
            <h1 className="title">НЕБЕСНІ ВОЇНИ РОДИНИ FOZZY GROUP</h1>
            <div className="search-panel">
                <FontAwesomeIcon 
                    icon={isStraightAlphabetic === null ? faArrowUpAZ : (isStraightAlphabetic ? faArrowUpAZ : faArrowDownAZ)} 
                    style={{ color: '#FFF', fontSize: '1.5rem' }} 
                    onClick={handleSortChange} 
                />
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="ПІБ"
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    {searchQuery && filteredNames.length > 0 && (
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
                        <option key={option} value={option} style={{fontFamily: 'Silpo'}}>{option}</option>
                    ))}
                </select>
            </div>
            <div className='heroes'>
                {filteredHeroes.length === 0 ? 
                ( <p className="no-heroes-message">Дані не знайдено.</p> ) :
                  ( <div className="heroes-gallery">
                    {currentHeroes.map(hero => (
                        <div key={hero.id} className="hero-profile" onClick={() => handleHeroClick(hero.id)}>
                            <img src={hero.img} alt={hero.name} />
                            <div className="hero-info">
                                <h2>{hero.name}</h2>
                                <p style={{ lineHeight: '20px' }}>{hero.position} {hero.rank !== '' && '/'}</p>
                                {hero.rank !== '' && <p style={{ lineHeight: '20px' }}>{hero.rank}</p>}
                                <button>ВШАНУВАТИ ГЕРОЯ</button>
                            </div>
                        </div>
                    ))}
                    </div>
                )}
            </div>
            {isDesktop && filteredHeroes.length > 0 && (
                <div className="pagination">
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>&larr;</button>
                    <span>{currentPage} / {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>&rarr;</button>
                </div>
            )}
        </div>
    );
};

export default Heroes;
