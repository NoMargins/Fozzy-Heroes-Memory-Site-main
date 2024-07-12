import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <footer className='footer' style={{position: 'relative'}}>
            <p style={{marginTop: '40px'}}>Кажуть, що кожна полегла душа — це нова зірка на небосхилі.</p>
            <p>Згадайте про колегу, вдивляючись у нічне зоряне небо, <br />а потім обов’язково підтримайте воїнів, <br />котрі сантиметр за сантиметром виборюють нашу перемогу.</p>
            <button>ДОНАТ НА ЗБІР СМІЛИВОВЕРШНИКІВ</button>
        </footer>
    );
};

export default Footer;
