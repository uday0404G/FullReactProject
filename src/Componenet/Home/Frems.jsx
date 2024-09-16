import React from 'react';

const Frems = () => {
  return (
    <div className="container-fluid  my-5">
      <div className="container text-center mb-4">
        <h1>Shop By Frame Shape</h1>
        <p>Choose your perfect frames from our stylish colors and patterns.</p>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-6 col-md-2 mb-4">
            <img
              src="https://static.zennioptical.com/marketing/homepage/componentsRedesign/0820/frame_shape-Rectangle.svg"
              alt="Rectangle"
              className="img-fluid"
            />
            <span className="d-block mt-2">Rectangle</span>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <img
              src="//static.zennioptical.com/marketing/homepage/componentsRedesign/0820/frame_shape-Square.svg"
              alt="Square"
              className="img-fluid"
            />
            <span className="d-block mt-2">Square</span>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <img
              src="//static.zennioptical.com/marketing/homepage/componentsRedesign/0820/frame_shape-Round.svg"
              alt="Round"
              className="img-fluid"
            />
            <span className="d-block mt-2">Round</span>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <img
              src="//static.zennioptical.com/marketing/homepage/componentsRedesign/0820/frame_shape-Cat-eye.svg"
              alt="Cat-Eye"
              className="img-fluid"
            />
            <span className="d-block mt-2">Cat-Eye</span>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <img
              src="https://static.zennioptical.com/marketing/homepage/componentsRedesign/0820/frame_shape-Aviator.svg"
              alt="Aviator"
              className="img-fluid"
            />
            <span className="d-block mt-2">Aviator</span>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <img
              src="https://static.zennioptical.com/marketing/homepage/componentsRedesign/0820/frame_shape-Rectangle.svg"
              alt="Browline"
              className="img-fluid"
            />
            <span className="d-block mt-2">Browline</span>
          </div>
          <div class="text-center col-6 col-md-2 mb-4"><button type="button" class="btn btn-dark">Shop all<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M16.8174 11.7275C17.0322 11.9424 17.0322 12.2432 16.8174 12.458L10.5439 18.8174C10.3291 19.0322 9.98535 19.0322 9.81348 18.8174L8.9541 17.958C8.73926 17.7432 8.73926 17.4424 8.9541 17.2275L14.0244 12.0713L8.9541 6.95801C8.73926 6.74316 8.73926 6.39941 8.9541 6.22754L9.81348 5.36816C9.98535 5.15332 10.3291 5.15332 10.5439 5.36816L16.8174 11.7275Z" fill="white"></path></svg></button></div>
        </div>
      </div>
    </div>
  );
};

export default Frems;
