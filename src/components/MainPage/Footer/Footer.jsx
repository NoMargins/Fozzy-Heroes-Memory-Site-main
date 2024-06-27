import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <footer className='footer' style={{position: 'relative'}}>
        <img src='https://preview.8.co.ua/foto/star.png' alt='star' className='star-one' style={{position: 'absolute', left: "49%", top: "20px", width: '20px', height: '20px'}}  />
        <img src='https://preview.8.co.ua/foto/star.png' alt='star' className='star-one' style={{position: 'absolute', left: "50%", top: "20px", width: '20px', height: '20px'}}  />
        <img src='https://preview.8.co.ua/foto/star.png' alt='star' className='star-one' style={{position: 'absolute', left: "51%", top: "20px", width: '20px', height: '20px'}}  />

            <p style={{marginTop: '40px'}}>Кажуть, що кожна полегла душа — це нова зірка на небосхилі.</p>
            <p>Згадайте про колегу, вдивляючись в нічне зоряне небо, <br />а потім обов’язково підтримайте воїнів, котрі сантиметр за сантиметром виборюють нашу перемогу.</p>
            <button>ДОНАТ НА ЗБІР СМІЛИВОВЕРШНИКІВ</button>
        </footer>
    );
};

export default Footer;
