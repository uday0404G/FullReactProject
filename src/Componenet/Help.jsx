import React from 'react'

const Help = () => {
  return (
    <>
      <div className='container-fluid py-5' style={{ backgroundColor: "#007b8f" }}>
        <div className='container text-white text-center mb-3'>
          <h1 className='mb-5'>Help Center</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <button className='btn btn-white bg-white ms-2 px-5 py-2 mb-2' style={{ color: "#007b8f" }}>
              <i className="fas fa-truck"></i> Order Status
            </button>
            <button className='btn btn-white bg-white ms-2 px-5 py-2 mb-2' style={{ color: "#007b8f" }}>
              <i className="fas fa-credit-card"></i> Gift Card Balance
            </button>
            <button className='btn btn-white bg-white ms-2 px-5 py-2 mb-2' style={{ color: "#007b8f" }}>
              <i className="fas fa-truck"></i> Rewards Status
            </button>
          </div>
          <div className="pt-5 d-flex justify-content-center">
            <input
              placeholder="Search"
              type='search'
              className='py-1'
              style={{ width: "100%", maxWidth: "600px", height: "40px", padding: "0 45px 0 15px", border: "1px solid #d8d1ca" }}
            />
          </div>
        </div>
      </div>

      <div className='container-fluid py-4 my-5' style={{ background: "linear-gradient(90.92deg, rgba(255, 255, 255, .8) 0%, rgba(236, 233, 230, .8) 100%)" }}>
        <h3 className='text-center'>How can we help?</h3>
        <div className="container d-flex justify-content-center flex-wrap my-5">
          <div className='text-center mx-3 mb-4'>
            <i className="fas fa-comments pb-4" style={{ color: "#007b8f", fontSize: "3.5rem" }}></i>
            <h4 className='pb-4'>Chat</h4>
            <p className='pb-2'>24/7 every day</p>
            <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
              Manage
            </button>
          </div>
          <div className='text-center mx-3 mb-4'>
            <i className="fas fa-phone-alt" style={{ color: "#007b8f", fontSize: "3.5rem" }}></i>
            <h4>Phone</h4>
            <p className="mb-4">800-211-2105<br />5am - 9pm PT every day<br />English, Español &amp; Français</p>
            <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
              Manage
            </button>
          </div>
          <div className='text-center mx-3 mb-4'>
            <i className="fas fa-envelope pb-4" style={{ color: "#007b8f", fontSize: "3.5rem" }}></i>
            <h4 className='pb-4'>Email</h4>
            <p className='pb-2'>24/7 every day</p>
            <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
              Manage
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Help
