import React from 'react';
import './description.scss';

const Description = () => {
    return (
        <div className="description-container">
        <img src='https://preview.8.co.ua/foto/star.png' alt='star' className='star-one' style={{left: 0, top: 0, width: '20px', height: '20px'}}  />
        <img src='https://preview.8.co.ua/foto/star.png' alt='star' className='star-one' style={{right: 0, top: 0, width: '20px', height: '20px'}}  />

            <div className="box">
                <p className="text">
                    <br />* * *<br />
                    <br />
                    з початку повномасштабного вторгнення росії в Україну Сотні 
                    Перевершників Fozzy Group взяли до рук зброю 
                    та пішли на захист нашої держави.
                    <br />
                    <br />
                    Але нещадна війна забирає найкращих з нас, 
                    хто поставив своє життя на кін за мрію всіх українців –
                    свободу, незалежність та мирне майбутнє наших дітей.
                    <br />
                    <br />
                    * * *
                    <br />
                    <br />
                    На цьому порталі завжди майорітиме пам'ять 
                    про кожного небесного воїна-перевершника, який назавжди став символом мужності та самопожертви.
                    <br />
                    <br />
                    Шануємо героїв та обіцяємо не полишати їхню справу – вони живуть у наших серцях, <br/> а ми продовжуємо боротися.
                    <br />
                    <br />
                    * * *
                </p>
            </div>
            <img src='https://preview.8.co.ua/foto/star.png' alt='star' className='star-one' style={{right: 0, bottom: 0, width: '20px', height: '20px'}}  />
        <img src='https://preview.8.co.ua/foto/star.png' alt='star' className='star-one' style={{left: 0, bottom: 0, width: '20px', height: '20px'}}  />


            {/* <div className="scroll-down">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L6 8H18L12 16Z" fill="currentColor" />
                </svg>
            </div> */}
        </div>
    );
};

export default Description;
