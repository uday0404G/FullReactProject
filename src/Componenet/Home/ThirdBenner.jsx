import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './slider.css';

const ThirdBenner = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper container my-5">
    <SwiperSlide >
      <img
        src="https://static.zennioptical.com/marketing/campaign/CFY/goth/091224_Goth_Girl_promo_cards-xl.png"
        alt="Ultra Responsive Lenses"
        className=''
      />
      <div className="content left-aligned">
        <div className="text-wrapper">
          <h1 className="title color-white">Dark Enchantment</h1>
          <p className="body-text color-white text-wrap">
          Bold frames. Delicate details. Captivating contrasts.
          </p>
        </div>
        <div className="button-group">
          <a className="link-btn" href="/b/transitions/gen-s">
          Shop sunglasses
            <span className="fa fa-chevron-right font-small md:font-medium ms-2"></span>
          </a>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
          <img
            src="https://static.zennioptical.com/marketing/campaign/game_day/2024/HP/240829_Game_Day_promo_carousel_tile-xl.png"
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
        src="https://static.zennioptical.com/marketing/homepage/componentsRedesign/0816/Minimalist/240815_Minimalist_promo_carousel_tile_xl.png"
        alt="Oversized Frames"
        className='rounded-5'
      />
        <div className="content left-aligned">
        <div className="text-wrapper">
          <h1 className="title color-white">Minimalist Glasses</h1>
          <p className="body-text color-white text-wrap">
          Simply Stylish frames that flatter any face.
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
   
  </Swiper>
  )
}

export default ThirdBenner