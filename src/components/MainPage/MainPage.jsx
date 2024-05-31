import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Head from './Head/Head';
import Description from './Description/Description';
import Heroes from './Heroes/Heroes';

const MainPage = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isHeadVisible, setIsHeadVisible] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsHeadVisible(window.scrollY < window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleHeroClick = (id) => {
        navigate(`/details/${id}`);
    };

    return (
        <div className="app">
            {isHeadVisible && <Head scrollY={scrollY} />}
            <Description />
            <Heroes onHeroClick={handleHeroClick} />
        </div>
    );
};

export default MainPage;
