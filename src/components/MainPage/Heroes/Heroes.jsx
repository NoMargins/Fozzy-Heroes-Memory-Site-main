import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchHeroesAsync } from '../../../redux/heroesSlice';
import { shuffleArray, getUniqueBusinesses, filterHeroes, filterNames } from '../../../utils/helpers';
import iconReverse from '../../../../img/icon-rev.svg';
import iconStraingt from '../../../../img/icon-str.svg';
import './heroes.scss';

const Heroes = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const heroesContainerRef = useRef(null); // Референс для контейнера компоненту
    const heroes = useSelector((state) => state.heroes.heroes);
    const status = useSelector((state) => state.heroes.status);

    const [currentPage, setCurrentPage] = useState(1);
    const [business, setBusiness] = useState('Усі бізнеси');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredNames, setFilteredNames] = useState([]);
    const [filteredHeroes, setFilteredHeroes] = useState([]);
    const [isStraightAlphabetic, setIsStraightAlphabetic] = useState(null);

    const heroesPerPage = window.innerWidth < 768 ? heroes.length : 9;
    const isDesktop = window.innerWidth >= 768;

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchHeroesAsync());
        }
    }, [status, dispatch]);

    useEffect(() => {
        const shuffledHeroes = shuffleArray([...heroes]);
        setFilteredHeroes(shuffledHeroes);
    }, [heroes]);

    useEffect(() => {
        const updateFilteredHeroes = () => {
            const filtered = filterHeroes(heroes, business, searchQuery, isStraightAlphabetic);
            setFilteredHeroes(filtered);

            if (searchQuery === '') {
                setFilteredNames([]);
                setCurrentPage(1);
            } else {
                const names = filterNames(heroes, searchQuery);
                setFilteredNames(names);
            }
        };

        updateFilteredHeroes();
    }, [searchQuery, business, isStraightAlphabetic, heroes]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            heroesContainerRef.current.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до вершини компоненту
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            heroesContainerRef.current.scrollIntoView({ behavior: 'smooth' }); // Прокрутка до вершини компоненту
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleNameClick = (name) => {
        setSearchQuery(name);
        setFilteredNames([]);
    };

    const handleHeroClick = (id) => {
        setSearchQuery('');
        setFilteredNames([]);
        navigate(`/details/${id}`);
    };

    const handleSortChange = () => {
        setIsStraightAlphabetic((prev) => !prev);
    };

    const uniqueBusinesses = getUniqueBusinesses(heroes);
    const totalPages = Math.ceil(filteredHeroes.length / heroesPerPage);
    const indexOfLastHero = currentPage * heroesPerPage;
    const indexOfFirstHero = indexOfLastHero - heroesPerPage;
    const currentHeroes = filteredHeroes.slice(indexOfFirstHero, indexOfLastHero);

    return (
        <div className="heroes-container" ref={heroesContainerRef}>
            <div className="stars"></div>
            <h1 className="title">НЕБЕСНІ ГЕРОЇ РОДИНИ FOZZY GROUP</h1>
            <div className="search-panel">
                <img 
                    src={isStraightAlphabetic ? iconStraingt : iconReverse} 
                    alt="icon" 
                    style={{ width: '30px', height: '30px', cursor: 'pointer' }} 
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
                        <option key={option} value={option}>{option}</option>
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
                                <p>{hero.position}{hero.rank !== "уточнити" && ','}</p>
                                {hero.rank !== "уточнити" && <p>{hero.rank}</p>}
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
