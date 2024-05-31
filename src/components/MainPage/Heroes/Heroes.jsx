import React, { useState } from 'react';
import './heroes.scss';

const heroesData = [
    // Приклад даних про героїв
    { id: 1, name: 'Василь Василенко', position: 'Посада офісного філду - "Сільпо"', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 2, name: 'Іван Іваненко', position: 'Посада офісного філду - "Холдинг"', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 3, name: 'Петро Петрененко', position: 'Посада офісного філду - Логістики', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 1, name: 'Василь Василенко', position: 'Посада офісного філду - "Сільпо"', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 2, name: 'Іван Іваненко', position: 'Посада офісного філду - "Холдинг"', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 3, name: 'Петро Петрененко', position: 'Посада офісного філду - Логістики', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 1, name: 'Василь Василенко', position: 'Посада офісного філду - "Сільпо"', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 2, name: 'Іван Іваненко', position: 'Посада офісного філду - "Холдинг"', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 3, name: 'Петро Петрененко', position: 'Посада офісного філду - Логістики', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 1, name: 'Василь Василенко', position: 'Посада офісного філду - "Сільпо"', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 2, name: 'Іван Іваненко', position: 'Посада офісного філду - "Холдинг"', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
    { id: 3, name: 'Петро Петрененко', position: 'Посада офісного філду - Логістики', img: 'https://pishi.pro/assets/images/resources/19362/760x550/2b0e75db72cd6957ee3d511306bb42325253e6e6.jpg' },
];

const Heroes = () => {
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
        <div className="heroes-container">
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
                            <p>{hero.position}</p>
                            <button>ВШАНУВАТИ ГЕРОЯ</button>
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
