import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.jsx';
import Details from './components/Details/Details.jsx';
import SkrollTop from './utils/SkrollTop.jsx';
import './styles.scss';

const App = () => {
    return (
        <Router>
            <SkrollTop />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;
