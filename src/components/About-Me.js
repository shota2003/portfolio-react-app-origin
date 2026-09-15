import React from 'react';

function About_Me() {
    return (
        <section className="about-me" id="about-me">
            <div className="container">
                <img className="main-pic" id="main_pic" src="./img/profile.jpg" alt="Profile" data-aos="zoom-in" data-aos-duration="500" />

                <p className="text" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200" data-i18n="about_me_text">I am a Web Developer with 2-3 years of hands-on experience in Web Development. During my works, I have made One-page Landing Pages and also more complex website - Online Shop. You can take a look at my portfolio in the <a className="portfolio-text" href="#portfolio">Portfolio</a> section!</p>
            </div>
        </section>
    );
};

export default About_Me;