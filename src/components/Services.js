import React from 'react';

function Services() {
    return (
        <section className="services" id="services">
            <h1 className="title" data-i18n="services_title">I can make any type of website</h1>

            <div className="container">
                <div className="box" id="box_1" data-aos="fade-right" data-popup-index="1">
                    <img src="./img/services/corporate.png" className="box-icon" alt="corporate" />
                    <p data-i18n="corporate">Company's Corporate Websites</p>
                </div>

                <div className="box" id="box_2" data-aos="fade-right" data-popup-index="2">
                    <img src="./img/services/landing.png" className="box-icon" alt="corporate" />
                    <p data-i18n="landing">Landing Pages</p>
                </div>

                <div className="box" id="box_3" data-aos="fade-right" data-popup-index="3">
                    <img src="./img/services/online-shop.png" className="box-icon" alt="corporate" />
                    <p data-i18n="services">Online Store</p>
                </div>

                <div className="box" id="box_4" data-aos="fade-right" data-popup-index="4">
                    <img src="./img/services/other.png" className="box-icon" alt="corporate" />
                    <p data-i18n="other">Other types of Websites</p>
                </div>
            </div>

            <div className="services-popup-wrapper" id="services_popup_wrapper">
                <div className="services-popup">
                    <a href="javascript:void();">
                        <img src="./img/close.png" className="popup-close-btn" alt="Popup Close Button" />
                    </a>
                    <img src="./img/services/corporate.png" className="box-popup-icon" alt="corporate" />
                    <p data-i18n="corporate_description">Company's corporate websites that represents company's purpose, services, history, etc.</p>
                </div>

                <div className="services-popup">
                    <a href="javascript:void();">
                        <img src="./img/close.png" className="popup-close-btn" alt="Popup Close Button" />
                    </a>
                    <img src="./img/services/landing.png" className="box-popup-icon" alt="corporate" />
                    <p data-i18n="landing_description">Landing pages of products at sale for advertisement</p>
                </div>

                <div className="services-popup">
                    <a href="javascript:void();">
                        <img src="./img/close.png" className="popup-close-btn" alt="Popup Close Button" />
                    </a>
                    <img src="./img/services/online-shop.png" className="box-popup-icon" alt="corporate" />
                    <p data-i18n="online_shop_description">Online Web Store with everything necessary, integrated payment system, user authorization mechanism, etc.</p>
                </div>

                <div className="services-popup">
                    <a href="javascript:void();">
                        <img src="./img/close.png" className="popup-close-btn" alt="Popup Close Button" />
                    </a>
                    <img src="./img/services/other.png" className="box-popup-icon" alt="corporate" />
                    <p data-i18n="other_description">Other types of websites</p>
                </div>
            </div>
        </section>
    );
};

export default Services;