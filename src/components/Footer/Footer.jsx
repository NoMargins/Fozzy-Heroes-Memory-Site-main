import React from 'react';
import "./footer.scss";

const donateUrl = 'https://plus.silpo.ua/';

const Footer = () => {
    const handleButtonClick = () => {
        window.open(donateUrl, '_blank');
    };

    return (
        <footer className='footer'>
            <p style={{marginTop: '40px'}}>Кажуть, що кожна полегла душа — це нова зірка на небосхилі.</p>
            <p>Згадайте про колегу, вдивляючись у нічне зоряне небо, <br />а потім обов’язково підтримайте воїнів, <br />котрі сантиметр за сантиметром виборюють нашу Перемогу.</p>
            <button onClick={handleButtonClick}>ДОНАТ НА ЗБІР СМІЛИВОВЕРШНИКІВ</button>
            <p style={{fontSize: '8pt', textTransform:'none'}}>© 2024 Fozzy Group. Усі права захищено.</p>
        </footer>
    );
};

export default Footer;
