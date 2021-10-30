import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import SwiperCore, {
    Pagination,Navigation
  } from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

export function rcf_render_slider (sigIDs, term){
    return [
    <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
        "clickable": true
    }} navigation={true} className="mySwiper">
        {
            sigIDs.map( sigID => <SwiperSlide><img src={`https://source.unsplash.com/1600x900/?sig=${sigID}&${term}`} key={sigID}/></SwiperSlide>    )
        }
    </Swiper>

    ];
}
