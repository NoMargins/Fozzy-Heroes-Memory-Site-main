import React, { useEffect, useState } from 'react';
import Head from './components/MainPage/Head/Head';
import Description from './components/MainPage/Description/Description';
import Heroes from './components/MainPage/Heroes/Heroes';
import './styles.scss';

const App = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isHeadVisible, setIsHeadVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsHeadVisible(window.scrollY < window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="app">
            {isHeadVisible && <Head scrollY={scrollY} />}
            <Description />
            <Heroes />
        </div>
    );
};

export default App;
