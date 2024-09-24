import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './user.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserDetail } from '../Redux/Loginreducer/action';
import Preloader from './Preloader';

const UserDetails = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook moved up here
  
  const Uid = localStorage.getItem('Uid');

  useEffect(() => {
    if (Uid) {
      dispatch(UserDetail(Uid)); // Corrected dispatch spelling
    }
  }, [dispatch, Uid]);

  const udata = store.UData;

  // Logout function
  const Logout = () => {
    localStorage.setItem('IsLogin', false);
    localStorage.setItem('Uid', null);

    const isLogin = localStorage.getItem('IsLogin');
    if (isLogin === 'false') {
      navigate('/');
    }
  };

  // Return preloader while data is being loaded
  if (!udata) {
    return <div><Preloader /></div>;
  }

  return (
    <>
      <div className='container-fluid mt-4'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 d-none d-md-block border'>
            <div className='w-100 py-3 px-3'>
              <h5>My Account</h5>
              <p>Dashboard</p>
              <p>Account Settings</p>
            </div>
            <div className='w-100 py-3 px-3'>
              <h5>JOIN ZENNI REWARDS</h5>
              <p>Refer Friends, Earn $30</p>
              <Link to="/Login">Sign Up</Link>
            </div>
            <div className='w-100 py-3 px-3'>
              <h5>Order Management</h5>
              <p>My Orders | <i className="fas fa-truck" style={{ color: "#007b8f" }}></i> Track My Order</p>
              <Link to="/Login">My Payment Methods</Link>
              <p>My Address Book</p>
            </div>
            <div className='w-100 py-3 px-3'>
              <h5>Personalization</h5>
              <p>My Prescription</p>
              <p>My Favorites</p>
              <p>My TryOn</p>
              <p>My Shared Images</p>
              <p>My Vision Test</p>
            </div>
            <div className='w-100 py-3 px-3'>
              <p>Gift Card Balance</p>
              <p>Communication Preferences</p>
              <img src="https://static.zennioptical.com/dev/image/site/marketing/logo/zlogo/ZEN_Sym_teal.png" className='img-fluid' style={{ width: "25px", height: "20px" }} alt="Zenni Logo" />
            </div>
          </div>

          <div className='col-lg-9 col-md-8 col-12 border px-4'>
            <div className='pt-4 ps-3' style={{ borderBottom: "1px solid #007b8f" }}>
              <h6 className='d-flex text-uppercase'>My Account Settings | <p className='ps-2 text-lowercase'>edit</p></h6>
              <h6 className='text-black d-flex'>First Name: <p className='ps-1 text-black'>{udata.FirstName}</p></h6>
              <h6 className='text-black d-flex'>Last Name: <p className='ps-1 text-black'>{udata.LastName}</p></h6>
              <h6 className='text-black d-flex'>Email: <p className='ps-1 text-black'>{udata.Email}</p></h6>
              <h6 className='text-black d-flex'>Password: <p className='ps-1 text-black'>{udata.Password}</p></h6>
              <h6 className='text-black d-flex'>Store Credit Balance: <p className='ps-1 text-black'>$0.00</p></h6>
            </div>

            <div className="pt-4 ps-3" style={{ borderBottom: "1px solid #007b8f" }}>
              <h6 className='text-uppercase'>Join Zenni Rewards <i style={{ color: "#007b8f" }} className="fas fa-question-circle"></i></h6>
              <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
                Let's Go
              </button>
            </div>

            <div className="pt-4 ps-3" style={{ borderBottom: "1px solid #007b8f" }}>
              <h6>My Orders</h6>
              <p className='ps-1 text-black'>You have no orders.</p>
            </div>

            <div className="pt-4 ps-3" style={{ borderBottom: "1px solid #007b8f" }}>
              <h6 className='mb-3'>My Payment Methods</h6>
              <p className='ps-1 mb-3 text-black'>You have not saved any payment methods.</p>
              <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
                Manage
              </button>
            </div>

            <div className="pt-4 ps-3" style={{ borderBottom: "1px solid #007b8f" }}>
              <h6 className='mb-3'>My Address Book</h6>
              <p className='ps-1 mb-3 text-black'>You have not saved any address items.</p>
              <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
                Manage
              </button>
            </div>

            <div className="pt-4 ps-3">
              <h6 className='mb-4'>My 'Try On'</h6>
              <p className='ps-1 text-black'>Zenni Frame Fit®</p>
              <p className='ps-1 mb-3 text-black'>You have no saved 'Frame Fit' images</p>
              <div className='d-flex justify-content-between'>
                <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
                  Manage
                </button>
                <button className='btn rounded-0 text-uppercase mb-3 px-5 py-2' onClick={Logout} style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
                  LogOut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
