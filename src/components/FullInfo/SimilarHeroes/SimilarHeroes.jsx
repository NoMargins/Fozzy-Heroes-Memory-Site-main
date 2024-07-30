import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './similarHeroes.scss';

let ITEMS_PER_PAGE = 5;

const getBusinessInGenitive = (business) => {
    switch (business) {
        case 'Логістика':
            return 'Логістики';
        case 'Холдинг':
            return 'Холдингу';
        case 'Сільпо':
            return 'Сільпо';
        default:
            return business;
    }
};

const SimilarHeroes = ({ heroes, business }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(3); // Встановлюємо 3 профілі на мобільних пристроях
            } else {
                setItemsPerPage(ITEMS_PER_PAGE);
            }
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        if (currentPage < Math.ceil(heroes.length / itemsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleHeroClick = (id) => {
        navigate(`/details/${id}`);
    };

    const startIndex = currentPage * itemsPerPage;
    const selectedHeroes = heroes.slice(startIndex, startIndex + itemsPerPage);
    const businessInGenitive = getBusinessInGenitive(business);

    return (
        <div className="similar-heroes">
            <h3>Вшанувати інших Сміливовершників сімʼї {businessInGenitive}:</h3>
            <div className="heroes-list-wrapper">
                <button className="pagination-button" onClick={handlePrev} disabled={currentPage === 0}>
                    &larr;
                </button>
                <div className="heroes-list">
                    {selectedHeroes.map(hero => (
                        <div
                            key={hero.id}
                            className="hero-preview"
                            onClick={() => handleHeroClick(hero.id)}
                        >
                            <img src={hero.img} alt={hero.name} />
                            <p>{hero.name}</p>
                        </div>
                    ))}
                </div>
                <button className="pagination-button" onClick={handleNext} disabled={currentPage >= Math.ceil(heroes.length / itemsPerPage) - 1}>
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default SimilarHeroes;
