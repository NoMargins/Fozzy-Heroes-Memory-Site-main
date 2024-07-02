import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SkrollTop from './utils/SkrollTop.jsx';
import './styles.scss';

// Lazy loading components
const MainPage = lazy(() => import('./components/MainPage/MainPage.jsx'));
const Details = lazy(() => import('./components/Details/Details.jsx'));

const App = () => {
    return (
        <Router>
            <SkrollTop />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/details/:id" element={<Details />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
