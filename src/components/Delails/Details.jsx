import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { heroes as heroesData } from '../../heroes/heroes';
import Stars from '../Stars/Stars';
import './details.scss';

const Details = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const { id } = useParams();
    const heroId = parseInt(id, 10);

    const navigate = useNavigate();

    const heroData = heroesData.find(hero => hero.id === heroId);
    const [comments, setComments] = useState(heroData.comments);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && comment) {
            setComments([...comments, { name, text: comment }]);
            setName('');
            setComment('');
        }
    };

    if (!heroData) {
        return <div>Героя не знайдено</div>;
    }

    return (
        <div className="details starry-background">
            {/* <Stars /> */}
            <div className="return-btn" onClick={() => navigate("/")}>← На головну</div>
            <div className="details-content">
                <div className="hero-image">
                    <img src={heroData.photo} alt={heroData.name} />
                    <h2 style={{textAlign: "center"}}>{heroData.name}</h2>
                    <p>{heroData.position}</p>
                </div>
                <div className="hero-description">
                    <p dangerouslySetInnerHTML={{ __html: heroData.description }}></p>
                </div>
            </div>
            <div className="comment-form">
                <h3>Залиште слова вдячності чи світлі спогади про Сміливовершника:</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Ваше ім'я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        placeholder="Коментар"
                        value={comment}
                        style={{ height: "100px"}}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button type="submit">Надіслати</button>
                </form>
            </div>
            <div className="comments">
                {comments.map((c, index) => (
                    <div key={index} className="comment">
                        <p><strong>{c.name}</strong></p>
                        <p>{c.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;