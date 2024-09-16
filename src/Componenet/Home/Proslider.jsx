import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

export default function Proslider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productCollection = collection(db, 'Glassesdatabase');

  const getProducts = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(productCollection);
      const productArray = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((product) => product.category?.name === 'EYEGLASSES'); // Filter by category "EYEGLASSES"
      setProducts(productArray);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  console.log(products);

  return (
    <>
      <div className="container-fluid mt-5  justify-content-center align-items-center d-flex">
        <div className="container row justify-content-center align-items-center d-flex">
          <div className="col-10">
            <h1>On Sale</h1>
            <h5>Give your eyewear wardrobe a refresh with these deals.</h5>
          </div>
          <div className="col-2 justify-content-center align-items-center d-flex">
            <button className="btn btn-outline-success">Shop All</button>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-5"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="container slidermain">
            {/* Product slide content */}
            <div
              className="base-tile recommendation-carousel-tile global-tile"
              data-insights-object-id={product.id}
              data-insights-position="1"
              style={{ backgroundColor: '#fafafa' }}
            >
              <div className="base-tile-header">
                <div className="badge-container">
                  <div className="daily-deals product-badge">
                    <span className="badge-title">Daily Deals</span>
                  </div>
                </div>
                <div className="favorite">
                  <button
                    data-fav="true"
                    title="Add To My Favorite"
                    className="favorite-btn normal-anchor-button"
                    type="button"
                    tabIndex="0"
                  >
                    <div className="favorite-icon-container">
                      <span className="favorite-icon tile-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <path
                            d="M26.0328 5.39213C23.0952 2.88872 18.7263 3.33901 16.0299 6.12118L14.9739 7.20938L13.9178 6.12118C11.2268 3.33901 6.85251 2.88872 3.91489 5.39213C0.548416 8.26543 0.371515 13.4223 3.38419 16.5369L13.757 27.2474C14.4271 27.9389 15.5153 27.9389 16.1854 27.2474L26.5582 16.5369C29.5762 13.4223 29.3993 8.26543 26.0328 5.39213Z"
                            fill="#FAFAFA"
                            fillOpacity="0.9"
                            stroke="#090B0B"
                            strokeWidth="2"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="base-tile-cover-container">
                <div className="tile-cover base-tile-cover global-tile-cover">
                  <a href="#" className="cover-image-container bg-loading">
                    <img
                      alt={product.name}
                      src={product.image}
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>

              <div
                className="base-tile-price-rating"
                style={{ backgroundColor: '#fafafa' }}
              >
                <div className="sale-price-row">
                  <span className="sale-price">${product.price}</span>
                  <span className="discount-off">Save {product.discount}%</span>
                </div>
                <div className="rating">
                  <span className="rating-star-icon tile-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.8198 1.73049C11.305 0.750364 12.6991 0.762659 13.1802 1.73049L15.8654 7.16031L21.8732 8.03383C22.9506 8.18966 23.3824 9.51429 22.6011 10.273L18.2546 14.4971L19.2826 20.4641C19.4676 21.5427 18.3286 22.3465 17.3746 21.8462L12 19.0287L6.62542 21.8462C5.67139 22.3506 4.53236 21.5427 4.71741 20.4641L5.74544 14.4971L1.3989 10.273C0.61759 9.51429 1.04936 8.18966 2.12675 8.03383L8.13458 7.16031L10.8198 1.73049Z"
                        fill="#F0BB00"
                      />
                    </svg>
                  </span>
                  <span className="rating-score">4.5</span>
                </div>
              </div>

              <a className="product-name base-tile-product-name" href="#">
                <span className="product-name">{product.title}</span>
                <span className="product-name">Premium Square Sunglasses</span>
              </a>

              <div
                className="base-tile-footer"
                style={{ backgroundColor: '#fafafa' }}
              >
                <div className="tile-color-swatch base-tile-color-swatch">
                  <div className="colors-container">
                    <button
                      className="color-item-btn active-color normal-anchor-button"
                      type="button"
                      tabIndex="0"
                    >
                      <div className="active-border"></div>
                      <div className="color-item color-swatch-brown"></div>
                    </button>
                    <button
                      className="color-item-btn normal-anchor-button"
                      type="button"
                      tabIndex="0"
                    >
                      <div className="color-item color-swatch-blue"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Footer with trust factors */}
      <div className="container-fluid  d-flex justify-content-center align-items-center mb-4">
        <div className="container row " style={{ height: '100px' }}>
          {/* Your trust factor sections */}
        </div>
      </div>
    </>
  );
}
