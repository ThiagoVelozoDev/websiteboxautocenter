// Carousel.js

import React from 'react';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import principal from '../../assets/img/1.JPG';
import segunda from '../../assets/img/2.PNG';
import terceira from '../../assets/img/4.PNG';
import './style.scss';

export function Carousel() {

    const handleNext = () => {
        // Navegar para o próximo slide
        if (swiper) {
            swiper.slideNext();
        }
    };

    const handlePrev = () => {
        // Navegar para o slide anterior
        if (swiper) {
            swiper.slidePrev();
        }
    };

    let swiper;


    return (
        <Swiper
            onSwiper={(swiperInstance) => (swiper = swiperInstance)}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className='swiper'
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            loop={false}
        >
            {/* Slide 1 */}
            <SwiperSlide className='item-slide' >
                <img src={principal} alt="Imagem 1" />

            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className='item-slide'>
                <img src={segunda} alt="Imagem 2" />

            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className='item-slide'>
                <img src={terceira} alt="Imagem 3" />
            </SwiperSlide>

            <div className="swiper-button-next" onClick={handleNext}></div>
            <div className="swiper-button-prev" onClick={handlePrev}></div>

        </Swiper>
    );
};




