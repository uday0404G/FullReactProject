import React from 'react'
import { Link } from 'react-router-dom'
import  "./user.css"
const UserDetails = () => {
  return (
    <>
    <div className='d-flex mt-4'>

    <div className='border ' style={{width:"20%"}}>
      <div className='w-100 py-3   px-3  '>
      <h5>My Account</h5>
      <p>Dashboard</p>
      <p>Account Settings</p>
      </div>
      <div className='w-100 py-3 px-3  '>
      <h5>JOIN ZENNI REWARDS</h5>
      <p>Refer Friends, Earn $30</p>
      <p to="/Login">Sign Up</p>
      </div>
      <div className='w-100 py-3 px-3  '>
      <h5>Order Management</h5>
      <p>My Orders |<i class="fas fa-truck" style={{color:"#007b8f"}} data-optly-7a6fb3051f174eca9d970aea9231722c=""></i>  Track My Order</p>
      <p to="/Login">My Payment Methods</p>
      <p>My Address Book</p>
      </div>
      <div className='w-100 py-3 px-3  '>
      <h5>Personalization</h5>
      <p>My Prescription</p>
      <p>My Favorites</p>
      <p>My TryOn</p>
      <p>My Shared Images</p>
      <p>My Vision Test</p>
      </div>
      <div className='w-100 py-3 px-3  '>
      <p>Gift Card Balance</p>
      <p>Communication Preferences</p>
    <img src="https://static.zennioptical.com/dev/image/site/marketing/logo/zlogo/ZEN_Sym_teal.png" className='img-fluid' style={{width:"25px",height:"20px"}} alt="" />
      </div>
    </div>
    <div className='border px-4' style={{width:"80%"}}>
      <div className='  pt-4 ps-3 ' style={{borderBottom:"1px solid #007b8f"}}>
        <h6  className='d-flex text-uppercase'>My Account Settings | <p className='ps-2 text-lowercase'> edit </p></h6>
        <h6 className='text-black d-flex'>Last Name: <p className='ps-1  text-black '> Lashkari</p> </h6>
        <h6 className='text-black d-flex'>Email: <p className='ps-1  text-black '> Lashkari</p> </h6>
        <h6 className='text-black d-flex'>Password: <p className='ps-1  text-black '> Lashkari</p> </h6>
        <h6 className='text-black d-flex'>Store Credit Balance: <p className='ps-1  text-black '> $0.00</p> </h6>
       
      </div>
      <div className=" pt-4 ps-3" style={{borderBottom:"1px solid #007b8f"}}>
          <h6 className='text-uppercase'>Join Zenni Rewards <i style={{color:"#007b8f"}} className="fas fa-question-circle"></i></h6>
          <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
            Let's Go
          </button>
      </div>
      <div className=" pt-4 ps-3" style={{borderBottom:"1px solid #007b8f"}}>
          <h6>My Orders </h6>
          <p className='ps-1  text-black '>
          You have no orders.
          </p> 
      </div>
      <div className=" pt-4 ps-3" style={{borderBottom:"1px solid #007b8f"}}>
          <h6 className='mb-3'>My Payment methods | </h6>
          <p className='ps-1 mb-3 text-black '>
          You have not saved any payment methods.
          </p> 
          <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
           Manage
          </button>
      </div>
      <div className=" pt-4 ps-3" style={{borderBottom:"1px solid #007b8f"}}> 
          <h6 className='mb-3'>My Address Book | </h6>
          <p className='ps-1 mb-3 text-black '>
          You have not saved any address items.
          </p> 
          <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
           Manage
          </button>
      </div>
      <div className=" pt-4 ps-3" > 
          <h6 className='mb-4'>My 'Try On' | </h6>
          <p className='ps-1 text-black '>
          Zenni Frame Fit®
          </p> 
          <p className='ps-1 mb-3 text-black '>
          You have no saved 'Frame Fit' images
          </p> 
          <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
           Manage
          </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default UserDetails