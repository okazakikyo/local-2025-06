import React from 'react'
import {EmblaOptionsType} from 'embla-carousel'
import {CarouselItem} from "@/config/types";
import {Swiper, SwiperSlide} from 'swiper/react';
import '@/css/swiper.css';
import 'swiper/css';

import {FreeMode, Pagination} from 'swiper/modules';

type PropType = {
  slides: CarouselItem[],
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const {slides} = props


  return (
    <Swiper
      slidesPerView={'auto'}
      initialSlide={1}
      centeredSlides={true}
      spaceBetween={60}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="ambience-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} >
          <img src={slide.url} alt={`Slide ${index + 1}`}/>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default EmblaCarousel
