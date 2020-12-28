import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img alt="" src={"https://source.unsplash.com/random/1920x1080?v=1"}/></SwiperSlide>
            <SwiperSlide><img alt="" src={"https://source.unsplash.com/random/1920x1080?v=2"}/></SwiperSlide>
            <SwiperSlide><img alt="" src={"https://source.unsplash.com/random/1920x1080?v=3"}/></SwiperSlide>
            <SwiperSlide><img alt="" src={"https://source.unsplash.com/random/1920x1080?v=4"}/></SwiperSlide>
        </Swiper>
    );
};

export default Slider;