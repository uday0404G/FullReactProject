import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './slider.css';

const SecondBener = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper container my-5">
        <SwiperSlide >
      <img
        src="https://static.zennioptical.com/marketing/homepage/componentsRedesign/0809/Gaming/headset_compatible_gaming_carousel_tile__v2-xl.png"
        alt="Fall New Arrivals"
        className='rounded-3'
      />
        <div className="content left-aligned">
        <div className="text-wrapper">
          <h1 className="title color-white">Now Trending: Fall Frames</h1>
          <p className="body-text color-white text-wrap">
          New glasses in eye-catching autumnal hues & bold designs.
          </p>
        </div>
        <div className="button-group">
          <a className="link-btn" href="/b/transitions/gen-s">
            Shop GEN S™
            <span className="fa fa-chevron-right font-small md:font-medium ms-2"></span>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide >
      <img
        src="https://static.zennioptical.com/marketing/campaign/kittle_collection/2024/HP/240903_kittles_HP_1Tile-lg.png"
        alt="Ultra Responsive Lenses"
      />
      <div className="content left-aligned">
        <div className="text-wrapper">
          <h1 className="title color-white">Ultra Responsive Lenses</h1>
          <p className="body-text color-white text-wrap">
            New Transitions® GEN S™ lenses are up to 2x faster to fade back than previous generations.
          </p>
        </div>
        <div className="button-group">
          <a className="link-btn" href="/b/transitions/gen-s">
            Shop GEN S™
            <span className="fa fa-chevron-right font-small md:font-medium ms-2"></span>
          </a>
        </div>
      </div>
    </SwiperSlide>

  
   
    <SwiperSlide>
      <img
        src="https://static.zennioptical.com/marketing/campaign/CFY/brat/240821_Brat_promo_carousel_tile-xl.png"
        alt="Game Day"
        className='rounded-5'
      />
        <div className="content left-aligned">
        <div className="text-wrapper">
          <h1 className="title color-white">Game Day Ready</h1>
          <p className="body-text color-white text-wrap">
          Break the rules, set the trends.
          </p>
        </div>
        <div className="button-group">
          <a className="link-btn" href="/b/transitions/gen-s">
          Shop collection
            <span className="fa fa-chevron-right font-small md:font-medium ms-2"></span>
          </a>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img
        src="https://static.zennioptical.com/marketing/homepage/componentsRedesign/0807/Promo%20Carousel%20Assets/promo_carousel_tile_eyeQ_lg.png"
        alt="Oversized Frames"
      />
        <div className="content left-aligned">
        <div className="text-wrapper">
          <h1 className="title color-white">Big frames. Small prices.</h1>
          <p className="body-text color-white text-wrap">
          Trendy oversized glasses and sunglasses starting at $6.95.
          </p>
        </div>
        <div className="button-group">
          <a className="link-btn" href="/b/transitions/gen-s">
            Shop GEN S™
            <span className="fa fa-chevron-right font-small md:font-medium ms-2"></span>
          </a>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
  )
}

export default SecondBener