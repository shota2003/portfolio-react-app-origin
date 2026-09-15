import React from 'react';

function Header() {
    return (
        <header>
            <div className="text">
                <a href="/"><h2 className="title" data-i18n="title">Portfolio</h2></a>
            </div>

            <div className="header-menu">
                <a href="/" className="link" data-i18n="main_page">Main Page</a>
                <a href="#about-me" className="link" data-i18n="about_me">About Me</a>
                <a href="#services" className="link" data-i18n="services">Services</a>
                <a href="#portfolio" className="link" data-i18n="portfolio">Portfolio</a>
                <a href="#contact" className="link" data-i18n="contact">Contact</a>
            </div>

            <div className="lang-toggle" title="Press this button to change the layout language / დააჭირეთ მოცემულ ღილაკს ენის შესაცვლელად">
                <select id="language-switcher">
                    <option value="en">English</option>
                    <option value="ka">ქართული</option>
                </select>
            </div>
        </header>
    );
};

export default Header;