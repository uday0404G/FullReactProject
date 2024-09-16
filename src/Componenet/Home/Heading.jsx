import React from "react";

const Heading = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="container text-center">
        <h1 className="fw-bold">Eyewear for Everyone</h1>
        <p>Find affordable frames to fit your budget and style.</p>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center text-center">
          <div className="col-6 col-sm-4 col-md-2  h-100 d-flex flex-column justify-content-center align-items-center">
            <p className="rounded-pill mb-2" style={{ backgroundColor: "#ffd5ad" }}>
              Rush Delivery
            </p>
            <img
              src="https://static.zennioptical.com/marketing/homepage/category/2-daydelivery.jpg"
              className="img-fluid"
              alt="Rush Delivery"
            />
            <p>3-5 day delivery</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2  h-100 d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://static.zennioptical.com/marketing/homepage/category/eyeglasses.jpg"
              className="img-fluid pt-4"
              alt="Eyeglasses"
            />
            <p>Eyeglasses</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2  h-100 d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://static.zennioptical.com/marketing/homepage/category/sunglasses.jpg"
              className="img-fluid pt-4"
              alt="Sunglasses"
            />
            <p>Sunglasses</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2  h-100 d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://static.zennioptical.com/marketing/campaign/brands/HP/240620_BrandedFrames_campaign_navtype.jpg"
              className="img-fluid pt-4"
              alt="Designer Brands"
            />
            <p>Designer Brands</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2  h-100 d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://static.zennioptical.com/marketing/homepage/category/transitions.jpg"
              className="img-fluid pt-4"
              alt="Transitions®"
            />
            <p>Transitions®</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2  h-100 d-flex flex-column justify-content-center align-items-center">
            <img
              src="https://static.zennioptical.com/marketing/homepage/category/bluelight.jpg"
              className="img-fluid pt-4"
              alt="Blue Light"
            />
            <p>Blue Light</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
