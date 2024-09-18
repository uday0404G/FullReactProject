import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './slider.css';

const FirstBener = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper container">
        <SwiperSlide >
          <img
            src="https://static.zennioptical.com/marketing/campaign/night_driving/HP/NightDriving_hp_carousel_tile-xl.png"
            alt="Ultra Responsive Lenses"
                  className='rounded-3'
          />
          <div className="content left-aligned">
            <div className="text-wrapper">
              <h1 className="title color-white ">Anti-Glare Night Driving Glasses</h1>
              <p className="body-text color-white text-wrap">
              Sharper vision for safer night driving.
              </p>
            </div>
            <div className="button-group">
              <a className="link-btn" href="/b/transitions/gen-s">
              Learn more
                <span className="fa fa-chevron-right font-small md:font-medium ms-2"></span>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide >
          <img
            src="https://static.zennioptical.com/marketing/homepage/componentsRedesign/0816/Fall%20New%20Arrivals/240807_Fall-New_Arrivals_promo_carousel_tile_xl.png"
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
        <SwiperSlide>
          <img
            src="https://static.zennioptical.com/marketing/campaign/oversized/2024/HP/08142024_Frame_Shape_Oversized_promo_carousel_tile-lg.jpg"
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
      </Swiper>
    </>
  );
};

export default FirstBener;
