// Details.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { heroes as heroesData } from '../../heroes/heroes';
import Footer from '../MainPage/Footer/Footer';
import SimilarHeroes from './SimilarHeroes/SimilarHeroes';
import './details.scss';

const Details = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [similarHeroes, setSimilarHeroes] = useState([]);

    const { id } = useParams();
    const heroId = parseInt(id, 10);
    const navigate = useNavigate();

    const heroData = heroesData.find(hero => hero.id === heroId);
    const [comments, setComments] = useState(heroData ? heroData.comments : []);

    useEffect(() => {
        if (heroData) {
            setComments(heroData.comments || []);
            // Фільтрація подібних героїв за ключем бізнес
            const filteredHeroes = heroesData.filter(
                h => h.id !== heroId && h.business === heroData.business
            );
            setSimilarHeroes(filteredHeroes);
        }
    }, [heroData, heroId]);

    if (!heroData) {
        return <div>Героя не знайдено</div>;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && comment) {
            setComments([...comments, { name, text: comment }]);
            setName('');
            setComment('');
        }
    };

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
                            <p>{heroData.birthday} - {heroData.deathday}</p>
                            <p>{heroData.position}</p>
                            <p dangerouslySetInnerHTML={{ __html: heroData.division }}></p>
                        </div>
                    </div>
                    <div className='together'>
                        <div className="hero-description">
                            <p dangerouslySetInnerHTML={{ __html: heroData.description }}></p>
                        </div>
                        {comments.length > 0 && (
                            <div className="comments">
                                {comments.map((c, index) => (
                                    <div key={index} className="comment">
                                        <p><strong>{c.name}</strong></p>
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
            </div>
            <SimilarHeroes heroes={similarHeroes} business={heroData.business} />
            <Footer />
        </>
    );
};

export default Details;
