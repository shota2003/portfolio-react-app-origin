// ⚠️ Do NOT upgrade three past 0.140.2 — Vanta's NET effect
// shader breaks and lines render white. See commit history.

import React, { useEffect, useState, useRef } from 'react';
import Swiper from 'swiper/bundle';
import Aos from 'aos';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import './styles/App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import About_Me from './components/About-Me';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
    const vantaRef = useRef(null);
    const vantaEffect = useRef(null);

    useEffect(() => {
        const header = document.querySelector("header");
        const responsiveHeader = document.getElementById("responsive-header");
        const webpageBackground = document.getElementById("webpage_background");

        const sidebar = document.getElementById("responsive-sidebar");
        const sidebarBtn = document.getElementById("sidebar-btn");
        const sidebarCloseBtn = document.getElementById("sidebar-close-btn");

        const aboutMeBtn = document.getElementById("about_me_btn");
        const servicesBtn = document.getElementById("services_btn");
        const portfolioBtn = document.getElementById("portfolio_btn");
        const contactBtn = document.getElementById("contact_btn");

        const aboutMe = document.getElementById("main_pic");

        const arrowBtn = document.getElementById("arrow_up_btn");
        const swiperSlides = document.querySelectorAll(".swiper-slide");
        const containerWrapper = document.getElementById("container_wrapper");
        const responsiveContainerWrapper = document.getElementById("responsive_container_wrapper");
        const slideContainers = document.querySelectorAll(".slide-container");
        const responsiveSlideContainers = document.querySelectorAll(".responsive-slide-container");
        const closeButtons = document.querySelectorAll(".container-close-btn");
        const closeButtonsImg = document.querySelectorAll(".container-close-btn-img");

        const servicesBoxes = document.querySelectorAll(".box");
        const servicesPopups = document.querySelectorAll(".services-popup");
        const popupWrapper = document.getElementById("services_popup_wrapper");
        const popupCloseButtons = document.querySelectorAll(".popup-close-btn");
        const popupCloseButtonsImg = document.querySelectorAll(".popup-close-btn");

        const deviceType = navigator.userAgent;

        if (deviceType.includes('Android') || deviceType.includes('iOS')) {
            const responsiveContent = document.getElementById('responsive_content');
            const swiperResponsiveContent = document.getElementById('swiper_responsive_content');
            if (responsiveContent) {
                responsiveContent.style.display = 'flex';
                swiperResponsiveContent.style.display = 'flex';
            }
        }

        if (deviceType.includes('Windows') || deviceType.includes('Mac') || deviceType.includes('Ubuntu')) {
            const desktopContent = document.getElementById('desktop_content');
            const swiperDesktopContent = document.getElementById('swiper_desktop_content');
            if (desktopContent) {
                desktopContent.style.display = 'flex';
                swiperDesktopContent.style.display = 'flex';
            }
        }

        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

            if (window.scrollY > 18) {
                responsiveHeader.classList.add("scrolled");
            } else {
                responsiveHeader.classList.remove("scrolled");
            }

            if (window.scrollY > 30) {
                webpageBackground.classList.add("scrolled");
                webpageBackground.style.transition = "all 0.8s ease";
            } else {
                webpageBackground.classList.remove("scrolled");
                webpageBackground.style.transition = "all 0.8s ease";
            }

            if (window.scrollY > 200) {
                arrowBtn.style.display = "flex";
            } else {
                arrowBtn.style.display = "none";
            }
        });

        sidebarBtn.addEventListener("click", () => {
            sidebar.style.transform = "translateX(0%)";
            sidebar.style.transition = "transform 0.4s ease";
            document.body.style.overflow = "hidden";
        });

        sidebarCloseBtn.addEventListener("click", () => {
            sidebar.style.transform = "translateX(-100%)";
            sidebar.style.transition = "transform 0.4s ease";
            document.body.style.overflow = "auto";
        });

        aboutMeBtn.addEventListener("click", () => {
            sidebar.style.transform = "translateX(-100%)";
            sidebar.style.transition = "transform 0.4s ease";
            document.body.style.overflow = "auto";
        });

        servicesBtn.addEventListener("click", () => {
            sidebar.style.transform = "translateX(-100%)";
            sidebar.style.transition = "transform 0.4s ease";
            document.body.style.overflow = "auto";
        });

        portfolioBtn.addEventListener("click", () => {
            sidebar.style.transform = "translateX(-100%)";
            sidebar.style.transition = "transform 0.4s ease";
            document.body.style.overflow = "auto";
        });

        contactBtn.addEventListener("click", () => {
            sidebar.style.transform = "translateX(-100%)";
            sidebar.style.transition = "transform 0.4s ease";
            document.body.style.overflow = "auto";
        });

        arrowBtn.addEventListener("click", () => {
            window.scrollTo(0, 0);
        });


        aboutMe.addEventListener("mouseover", () => {
            aboutMe.style.transition = "all 0.4s ease";
            aboutMe.style.scale = "1.1";
        });

        aboutMe.addEventListener("mouseleave", () => {
            aboutMe.style.transition = "all 0.4s ease";
            aboutMe.style.scale = "1";
        });


        servicesBoxes.forEach(box => {
            box.addEventListener("mouseover", () => {
                box.style.transition = "all 0.5s ease";
                box.style.scale = "1.05";
                box.style.backgroundColor = "#003874";
            });

            box.addEventListener("mouseleave", () => {
                box.style.transition = "all 0.5s ease";
                box.style.scale = "1";
                box.style.backgroundColor = "#002750";
            });
        });



        function openSlideContainer(index) {

            if (containerWrapper) {
                containerWrapper.style.display = "block";
                
                slideContainers.forEach(container => {
                    container.style.display = "flex";
                });

                if (slideContainers[index]) {
                    slideContainers[index].style.display = "flex";
                }
                
                document.body.style.overflow = "hidden";
            }
            

            if (responsiveContainerWrapper) {
                responsiveContainerWrapper.style.display = "block";
                
                responsiveSlideContainers.forEach(container => {
                    container.style.display = "none";
                });

                if (responsiveSlideContainers[index]) {
                    responsiveSlideContainers[index].style.display = "flex";
                }
                
                document.body.style.overflow = "hidden";
            }
        }


        function closeAllContainers() {
            if (containerWrapper) {
                containerWrapper.style.display = "none";
            }
            if (responsiveContainerWrapper) {
                responsiveContainerWrapper.style.display = "none";
            }

            slideContainers.forEach(container => {
                container.style.display = "none";
            });
            responsiveSlideContainers.forEach(container => {
                container.style.display = "none";
            });
            
            document.body.style.overflow = "auto";
        }


        swiperSlides.forEach((slide, index) => {
            slide.style.cursor = "pointer";

            slide.addEventListener("click", (e) => {
                if (e.target.closest('.swiper-button-next') || 
                    e.target.closest('.swiper-button-prev')) {
                    return;
                }
                openSlideContainer(index);
            });
        });


        closeButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                closeAllContainers();
            });

            button.addEventListener("mouseover", () => {
                closeButtonsImg.forEach(buttonImg => {
                    buttonImg.src = "./img/close-on-hover.png";
                });
                button.style.transition = "all 0.4s ease";
            });

            button.addEventListener("mouseleave", () => {
                closeButtonsImg.forEach(buttonImg => {
                    buttonImg.src = "./img/close.png";
                });
                button.style.transition = "all 0.4s ease";
            });
        });


        if (containerWrapper) {
            containerWrapper.addEventListener("click", (e) => {
                if (e.target === containerWrapper) {
                    closeAllContainers();
                }
            });
        }
        
        if (responsiveContainerWrapper) {
            responsiveContainerWrapper.addEventListener("click", (e) => {
                if (e.target === responsiveContainerWrapper) {
                    closeAllContainers();
                }
            });
        }


        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeAllContainers();
            }
        });


        function openPopup(index) {
            if (popupWrapper) {
                popupWrapper.style.display = "flex";

                servicesPopups.forEach(container => {
                    container.style.display = "none";
                });
                
                if (servicesPopups[index]) {
                    servicesPopups[index].style.display = "flex";
                }
                
                document.body.style.overflow = "hidden";
            }
    
        }

        function closePopups() {
            if (popupWrapper) {
                popupWrapper.style.display = "none";
            }

            servicesPopups.forEach(popup => {
                popup.style.display = "none";
            });
            
            document.body.style.overflow = "auto";
        }


        servicesBoxes.forEach((box, index) => {        
            box.addEventListener("click", (e) => {
                openPopup(index);
            });
        });


        popupCloseButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                e.preventDefault();
                closePopups();
            });

            button.addEventListener("mouseover", () => {
                popupCloseButtonsImg.forEach(popupCloseButton => {
                    popupCloseButton.src = "./img/close-on-hover.png";
                });
            });

            button.addEventListener("mouseleave", () => {
                popupCloseButtonsImg.forEach(popupCloseButton => {
                    popupCloseButton.src = "./img/close.png";
                });
            });
        });


        if (popupWrapper) {
            popupWrapper.addEventListener("click", (e) => {
                if (e.target === popupWrapper) {
                    closePopups();
                }
            });
        }

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closePopups();
            }
        });

        /* Swiper */

        new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            scrollbar: {
                el: '.swiper-scrollbar',
            },

            effect: 'coverflow',
            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },
            depth: 100,
        });

        /* Language Switch */

        const translations = {
            en: {
                page_title: 'Portfolio - Shota Kurdgelashvili',
                title: 'Portfolio',

                main_page: 'Main Page',
                about_me: 'About Me',
                services: 'Services',
                portfolio: 'Portfolio',
                contact: 'Contact',

                lang_btn_title: 'Press this button to change the layout language / დააჭირეთ მოცემულ ღილაკს ენის შესაცვლელად',

                introduction_banner_title: 'I am a Web Developer',
                introduction_banner_subtitle: 'Welcome to my Portfolio Page!',

                about_me_text: 'I am a Web Developer with 2-3 years of hands-on experience in Web Development. During my works, I have made One-page Landing Pages and also more complex website - Online Shop. You can take a look at my portfolio in the <a class="portfolio-text" href="#portfolio">Portfolio</a> section!',

                services_title: 'I can make any type of website',
                landing: 'Landing Pages',
                landing_description: 'Landing pages of products at sale for advertisement',
                corporate: 'Company\'s corporate website',
                corporate_description: 'Company\'s corporate websites that represents company\'s purpose, services, history, etc.',
                online_shop: 'Multifunctional Online Shop',
                online_shop_description: 'Online Web Store with everything necessary, integrated payment system, user authorization mechanism, etc.',
                other: 'Other type of Websites',
                other_description: 'Other types of websites',

                container_title: 'My Work',
                container_subtitle: 'Click on the slide for details',
                container_name: 'Slender BM Merch',
                container_description: 'Slender BM Merch is an online store which sells branded merch, such as, t-shirts, bracelets, mugs, etc. You can check it out at <a href="https://slenderbm.ge">slenderbm.ge</a>',
                responsive_container_name: 'Slender BM Merch',
                responsive_container_description: 'Slender BM Merch is an online store which sells branded merch, such as, t-shirts, bracelets, mugs, etc. You can check it out at <a href="https://slenderbm.ge">slenderbm.ge</a>',

                label_full_name: 'Full Name/Company Name',
                label_email: 'Email',
                label_website_type: 'Website type',
                option_placeholder: '-- Choose preferred type --',
                option_landing: 'Landing Page/Pages',
                option_corporate: 'Company Corporate Website',
                option_online_webstore: 'Online Webstore',
                option_other: 'Other',
                submit_btn: 'Place an order',

                order_form_title: 'If you want to build a Multifunctional Website <br> based on modern standards, fill out this form below!',

                footer_social_media_title: 'Social Media',
                footer_contact: 'Contact',


                success_page_title: 'Order placed successfully!',
                success_page_text: 'Your order was placed successfully!<br>You will be redirected to homepage shortly.',

                fail_page_title: 'Order failure',
                fail_page_text: 'Your order could not be placed. <br>Try Again placing your order. You will be redirected to homepage shortly.'
            },

            ka: {
                page_title: 'პორტფოლიო - შოთა კურდღელაშვილი',
                title: 'პორტფოლიო',

                main_page: 'მთავარი',
                about_me: 'ჩემ შესახებ',
                services: 'სერვისები',
                portfolio: 'პორტფოლიო',
                contact: 'კონტაქტი',

                lang_btn_title: 'Press this button to change the layout language',

                introduction_banner_title: 'მე ვარ ვებ დეველოპერი',
                introduction_banner_subtitle: 'კეთილი იყოს თქვენი მობრძანება!',

                about_me_text: 'ვარ ვებ დეველოპერი 2-3 წლიანი გამოცდილებით. მაქვს როგორც ერთგვერდიანი ე.წ. "ლენდინგ" გვერდების აწყობის, ასევე ონლაინ მაღაზიის შექმნის გამოცდილებაც. შეგიძლიათ ჩემი ნამუშევრები იხილოთ <a class="portfolio-text" href="#portfolio">პორტფოლიოს</a> განყოფილებაში!',

                services_title: 'შემიძლია დავამზადო ნებისმიერი ტიპის ვებსაიტი',
                landing: '"Landing" გვერდები',
                landing_description: 'Landing გვერდები ონლაინ მაღაზიაზე განთავსებული საქონლის რეკლამისთვის განკუთვნილი გვერდი პროდუქტის აღწერილობით',
                corporate: 'კომპანიის კორპორატიული ვებსაიტი',
                corporate_description: 'კომპანიის კორპორატიული ვებსაიტი, სადაც განთავსებულია ინფორმაცია მისი შექმნის ისტორიაზე, მის მიზანზე, გუნდზე და სხვა კომპონენტებზე',
                online_shop: 'მრავალფუნქციური ონლაინ მაღაზია',
                online_shop_description: 'ონლაინ მაღაზია აღჭურვილი ყველა საჭირო მექანიზმით, როგორიცაა, გადახდის სისტემა, მომხმარებელთა ავტორიზაციის მექანიზმი, გადახდების ისტორია და ა.შ.',
                other: 'სხვა ტიპის ვებსაიტები',
                other_description: 'სხვა დანიშნულების მქონე ვებსაიტები',

                container_title: 'ჩემი ნამუშევრები',
                container_subtitle: 'დააჭირეთ სლაიდზე დეტალების სანახავად',
                container_name: 'Slender BM Merch',
                container_description: 'Slender BM Merch წარმოადგენს ონლაინ მაღაზიას, სადაც იყიდება ბრენდირებული მერჩი და მოიცავს მაისურებს, სამაჯურებს, ჭიქებს და ა.შ. ვებსაიტი შეგიძლიათ ნახოთ ამ მისამართზე: <a href="https://slenderbm.ge">slenderbm.ge</a>',
                responsive_container_name: 'Slender BM Merch',
                responsive_container_description: 'Slender BM Merch წარმოადგენს ონლაინ მაღაზიას, სადაც იყიდება ბრენდირებული მერჩი და მოიცავს მაისურებს, სამაჯურებს, ჭიქებს და ა.შ. ვებსაიტი შეგიძლიათ ნახოთ ამ მისამართზე: <a href="https://slenderbm.ge">slenderbm.ge</a>',            

                label_full_name: 'სახელი და გვარი /<br>კომპანიის სახელწოდება',
                label_email: 'ელ. ფოსტა',
                label_website_type: 'ვებსაიტის ტიპი',
                option_placeholder: '-- აირჩიეთ სასურველი ტიპი --',
                option_landing: '"ლენდინგ" გვერდ(ებ)ი',
                option_corporate: 'კომპანიის კორპორატიული ვებსაიტი',
                option_online_webstore: 'ონლაინ მაღაზია',
                option_other: 'სხვა',
                submit_btn: 'შეკვეთა',

                order_form_title: 'თუ გსურთ თანამედროვე სტანდარტებზე დაფუძნებული <br> მრავალფუნქციური ვებსაიტის შექმნა, შეავსეთ ეს ფორმა!',

                footer_social_media_title: 'სოციალური ქსელები',
                footer_contact: 'კონტაქტი',


                success_page_title: 'შეკვეთა წარმატებით გაფორმდა!',
                success_page_text: 'თქვენი შეკვეთა წარმატებით გაფორმდა!<br>რამდენიმე წამში დაბრუნდებით მთავარ გვერდზე.',

                fail_page_title: 'თქვენი შეკვეთა ვერ გაფორმდა',
                fail_page_text: 'სამწუხაროდ თქვენი შეკვეთა ვერ გაფორმდა. <br>სცადეთ თავიდან. რამდენიმე წამში დაბრუნდებით მთავარ გვერდზე.'
            }
        }

        const switcherDesktop = document.getElementById("language-switcher");
        const switcherResponsive = document.getElementById("language-switcher-responsive");

        function changeLanguage(lang) {
            const elements = document.querySelectorAll("[data-i18n]");
            const favicon = document.getElementById("favicon");
            
            elements.forEach(element => {
                const key = element.getAttribute("data-i18n");
                if (translations[lang] && translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                }
            });

            document.documentElement.lang = lang;

            if (lang === 'ka') {
                favicon.href = './icon/favicon_ka.png';
                window.history.pushState({ path: '/ka' }, '', '/ka');
            } else {
                favicon.href = './icon/favicon_en.png';
                window.history.pushState({ path: '/' }, '', '/');
            }
            
            localStorage.setItem("preferredLanguage", lang);
        }

        switcherDesktop.addEventListener("change", (e) => {
            changeLanguage(e.target.value);
        });

        switcherResponsive.addEventListener("change", (e) => {
            changeLanguage(e.target.value);
        })

        const savedLang = localStorage.getItem("preferredLanguage");
        const browserLang = navigator.language.split("-")[0];
        
        let defaultLang = savedLang || (translations[browserLang] ? browserLang : "en");
        defaultLang = switcherDesktop.value || switcherResponsive.value;
        
        changeLanguage(defaultLang);

        if (!vantaEffect.current) {
            vantaEffect.current = NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 100.00,
                minWidth: 100.00,
                scale: 0.80,
                scaleMobile: 0.50,
                color: 0x3f84ff,
                backgroundColor: 0x1329
            });
        }
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };

    }, []);

    return (
        <>
            <div id='webpage_background' ref={vantaRef} className='webpage-background' data-aos='fade-up' />
            <main className='container'>
                <Header />
                <section className="responsive-header" id="responsive-header">
                    <div className="text">
                        <a href="/"><h2 className="title" data-i18n="title">Portfolio</h2></a>
                    </div>

                    <div className="sidebar-menu-btn">
                        <a href="javascript:void(0);" id="sidebar-btn"><img src="./img/menu.png" alt="Sidebar Button" id="btn-img" /></a>
                    </div>
                </section>

                <section className="responsive-sidebar" id="responsive-sidebar">
                    <div className="sidebar-close-btn">
                        <a href="javascript:void(0);" id="sidebar-close-btn"><img src="./img/close.png" alt="Close Button" id="close-btn-img" /></a>
                    </div>

                    <div className="sidebar">
                        <a href="/" className="link" data-i18n="main_page">Main Page</a>
                        <a href="#about-me" id="about_me_btn" className="link" data-i18n="about_me">About Me</a>
                        <a href="#services" id="services_btn" className="link" data-i18n="services">Services</a>
                        <a href="#portfolio" id="portfolio_btn" className="link" data-i18n="portfolio">Portfolio</a>
                        <a href="#contact" id="contact_btn" className="link" data-i18n="contact">Contact</a>
                    </div>

                    <div className="lang-toggle-responsive">
                        <select id="language-switcher-responsive">
                            <option value="en">English</option>
                            <option value="ka">ქართული</option>
                        </select>
                    </div>
                </section>

                <div className="return-to-top" id="return_to_top">
                    <button id="arrow_up_btn"><img className="arrow-up" src="./img/arrow-heading-up.png" alt="Arrow Up" /></button>
                </div>

                <Introduction />
                <About_Me />
                <Services />
                <Portfolio />
                <Footer />
            </main>
        </>
    );
};

Aos.init();

export default App;