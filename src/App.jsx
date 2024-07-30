import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import SkrollTop from './utils/SkrollTop.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// Lazy loading components
const MainPage = lazy(() => import('./components/MainPage/MainPage.jsx'));
const FullInfo = lazy(() => import('./components/FullInfo/FullInfo.jsx'));

const App = () => {
    return (
        <>
            <SkrollTop />
            <Suspense fallback={<div className="loading-fallback">Завантаження...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/details/:id" element={<FullInfo />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
