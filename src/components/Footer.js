import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="social-media-icons">
                <div className="text">
                    <h2 className="title" data-i18n="footer_social_media_title">Social Media</h2>

                    <div className="info">
                        <a href="https://www.facebook.com/shota.kurdgelashvili2003"><img src="./img/facebook.png" alt="Facebook" className="icon" /></a>
                        <a href="https://www.instagram.com/shota_kurdgelashvili/"><img src="./img/instagram.png" alt="Instagram" className="icon" /></a>
                        <a href="https://www.linkedin.com/in/shota-kurdgelashvili-70438b237/"><img src="./img/linkedin.png" alt="LinkedIn" className="icon" /></a>
                    </div>
                </div>
            </div>
            <div className="contact" id="contact">
                <h2 className="title" data-i18n="footer_contact">Contact</h2>
                <a className="email" href="mailto:kurdgelashvili2013@gmail.com" style={{ fontFamily: 'BPG ExtraSquare Mtavruli' }}>kurdgelashvili2013@gmail.com</a><br />
                <a className="phone-number" href="tel:+995551026419" style={{ fontFamily: 'BPG ExtraSquare Mtavruli' }}>551-02-64-19</a>
            </div>
        </footer>
    );
};

export default Footer;