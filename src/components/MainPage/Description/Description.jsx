import React from 'react';
import ReportForm from '../../ReportForm/ReportForm';
import starImage from '../../../../img/star.png';
import './description.scss';

const Description = () => {
    const renderStars = () => (
        <>
            {Array.from({ length: 3 }).map((_, index) => (
                <img key={index} src={starImage} alt="star" className="star-one" />
            ))}
            <br /><br />
        </>
    );

    return (
        <div className="description-container">
            <div className="box">
                <p className="text">
                    <br />
                    {renderStars()}
                    Із початку повномасштабного вторгнення росії в Україну cотні 
                    Перевершників Fozzy Group взяли до рук зброю 
                    та пішли на захист нашої держави.
                    <br /><br />
                    Але нещадна війна забирає найкращих з нас, 
                    хто поставив своє життя на кін за мрію всіх українців –
                    свободу, незалежність та мирне майбутнє наших дітей.
                    <br /><br />
                    {renderStars()}
                    На цьому порталі завжди майорітиме пам'ять 
                    про кожного небесного воїна-Перевершника, який назавжди став символом мужності та самопожертви.
                    <br /><br />
                    Шануємо героїв та обіцяємо не полишати їхню справу – вони живуть у наших серцях, 
                    а ми продовжуємо боротися.
                    <br /><br />
                    {renderStars()}
                    Якщо Ви знаєте полеглого захисника-співробітника «Сільпо», Логістики або Холдингу Fozzy Group, про якого хотіли б згадати на цьому Порталі памʼяті, – будь ласка, напишіть нам:
                    <br />
                    <ReportForm text={'Повідомити'}/>
                </p>
            </div>
        </div>
    );
};

export default Description;
