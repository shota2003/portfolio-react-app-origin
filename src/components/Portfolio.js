import React from 'react';

function Portfolio() {
    return (
        <section className="portfolio" id="portfolio">

            <h1 className="title" data-i18n="container_title">My Work</h1>
            <h3 className="subtitle" data-i18n="container_subtitle">Click on the slide for details</h3>

            <div className="swiper" data-aos="fade-right">
                <div className="swiper-wrapper">

                    <div id="swiper_responsive_content" style={{ display: 'none' }}>
                        <div className="swiper-slide" id="responsive-swiper-slide">
                            <img src="./img/portfolio/slender_bm_mobile.jpg" />
                        </div>
                    </div>

                    <div id="swiper_desktop_content" style={{ display: 'none' }}>
                        <div className="swiper-slide" id="swiper-slide">
                            <img src="./img/portfolio/slender_bm.jpg" />
                        </div>
                    </div>

                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>

            <div id="responsive_content">
                <div className='responsive-container-wrapper' id='responsive_container_wrapper'></div> 
                
                <div className='responsive-slide-container' id='responsive_slide_container_1' data-slide-index='1'>
                    <a className='container-close-btn' href='javascript:void(0);'>
                        <img className='container-close-btn-img' src='./img/close.png' alt='Close Button' />
                    </a>
                    <div className='text'>
                        <h3 className='title' data-i18n='responsive_container_name'>Slender BM Merch</h3>
                        <p className='description' data-i18n='responsive_container_description'>Slender BM Merch is an online store which sells branded merch, such as, t-shirts, bracelets, mugs, etc. You can check it out at <a href="https://slenderbm.ge">slenderbm.ge</a></p>
                    </div>
                </div>
            </div>
            
            <div id="desktop_content">
                <div className='container-wrapper' id='container_wrapper'></div>
                
                <div className='slide-container' id='slide_container_1' data-slide-index='1'>
                    <a className='container-close-btn' href='javascript:void(0);'>
                        <img className='container-close-btn-img' src='./img/close.png' alt='Close Button' />
                    </a>
                    <div className='text'>
                        <h3 className='title' data-i18n='container_name'>Slender BM Merch</h3>
                        <p className='description' data-i18n='container_description'>Slender BM Merch is an online store which sells branded merch, such as, t-shirts, bracelets, mugs, etc. You can check it out at <a href="https://slenderbm.ge">slenderbm.ge</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;