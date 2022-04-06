import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper'
import Navbar from './Navbar'

export default function Slider() {
	return (
		<>
			<Navbar />
			<Swiper
				autoplay={{ delay: 3000 }}
				effect={'fade'}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Navigation, Pagination, Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="satellite.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="img1.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="img2.jpg" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="img3.jpg" />
				</SwiperSlide>
			</Swiper>
		</>
	)
}
