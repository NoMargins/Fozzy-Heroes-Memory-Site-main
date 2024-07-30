import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer.jsx';
import SimilarHeroes from './SimilarHeroes/SimilarHeroes.jsx';
import { fetchHeroByIdAsync, selectHeroById, selectSimilarHeroes } from '../../redux/heroesSlice.js'; 
import { postComment } from '../../utils/api.js'; 
import formatDate from '../../utils/formatDate.js';
import replaceQuotesWithChevrons from '../../utils/replaceQuotes.js';
import ReportForm from '../ReportForm/ReportForm.jsx';
import './fullInfo.scss';

const FullInfo = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const heroId = parseInt(id, 10);
    const heroData = useSelector((state) => selectHeroById(state, heroId));
    const similarHeroes = useSelector((state) => selectSimilarHeroes(state, heroId));
    const status = useSelector((state) => state.heroes.status);
    const error = useSelector((state) => state.heroes.error);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'idle' || !heroData) {
            dispatch(fetchHeroByIdAsync(heroId));
        }
    }, [status, heroId, heroData, dispatch]);

    useEffect(() => {
        if (heroData) {
            setComments(heroData.comments || []);
        }
    }, [heroData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && comment) {
            try {
                await postComment(heroId, { name, text: comment });
                setComments([...comments, { name, text: comment }]);
                setName('');
                setComment('');
                setShowPopup(true);
            } catch (error) {
                console.error('Помилка при відправці коментаря:', error);
            }
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    if (status === 'loading') {
        return <div>Завантаження...</div>;
    }

    if (error) {
        return <div>Помилка при завантаженні даних: {error}</div>;
    }

    if (!heroData) {
        return <div>Героя не знайдено</div>;
    }

    return (
        <>
            <div className="details">
                <div className="stars"></div>
                <div className="return-btn" onClick={() => navigate("/")}>← На головну</div>
                <div className="details-content">
                    <div className="hero-image">
                        <img src={heroData.img} alt={heroData.name} />
                        <div className='hero-info'>
                            <h2 style={{ textAlign: "center", lineHeight: '1.8rem' }}>{heroData.name}</h2>
                            <p>{formatDate(heroData.birthday)} — {formatDate(heroData.deathday)}</p>
                            <p>{heroData.position}</p>
                            <p dangerouslySetInnerHTML={{ __html: replaceQuotesWithChevrons(heroData.division)}}></p>
                        </div>
                    </div>
                    <div className='together'>
                        <div className="hero-description">
                            <p dangerouslySetInnerHTML={{ __html: replaceQuotesWithChevrons(heroData.description)}}></p>
                        </div>
                        {comments.length > 0 && (
                            <div className="comments">
                                {comments.map((c, index) => (
                                    <div key={index} className="comment">
                                        <p style={{color: '#FFA500'}}><strong>{c.name}</strong></p>
                                        <p>{c.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="comment-form">
                            <h3>Залиште слова вдячності чи світлі спогади про Сміливовершника:</h3>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Ваше ім'я"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                                <textarea
                                    placeholder="Коментар"
                                    value={comment}
                                    style={{ height: "100px" }}
                                    onChange={(e) => setComment(e.target.value)}
                                    required
                                ></textarea>
                                <button type="submit">Надіслати</button>
                            </form>
                        </div>
                    </div>
                </div>
                {showPopup && (
                    <div className="popup">
                        <div className="popup-content">
                            <p>Дякуємо! Ваш відгук невдовзі буде опрацьований модератором та розміщений на сайті.</p>
                            <button onClick={handleClosePopup}>Закрити</button>
                        </div>
                    </div>
                )}
            </div>
            <SimilarHeroes heroes={similarHeroes} business={heroData.business} />
            <Footer />
        </>
    );
};

export default FullInfo;
