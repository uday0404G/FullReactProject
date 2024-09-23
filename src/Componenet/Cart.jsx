import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddtocartDetails, RemoveFromCart } from '../Redux/Loginreducer/action';
import Preloader from './Preloader';

const Cart = () => {
  const uid=localStorage.getItem("Uid")
  const store=useSelector(s=>s)
  const dispatch=useDispatch()

 

  useEffect(()=>{
    if(uid){
      dispatch(AddtocartDetails(uid))
    }
  },[dispatch,uid])


  console.log(store.Cart);
  const cart=store.Cart;
  console.log(cart);
  if (!cart) {
    return <Preloader/> 
  }
  const remove=(id)=>{
    dispatch(RemoveFromCart(id))
  }
  return (
    <>
    {
      cart.length === 0?
      <div className='container-fluid my-5 px-5'>
      <h1 className='py-1'>Your shopping cart is empty.</h1>
      <p className='mb-4'>You have no items in your shopping cart.</p>
      <button className='btn rounded-0 text-uppercase mb-3' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
        Start Shopping
      </button>
    </div>:
        <>
         <div className='container-fluid border d-flex justify-content-between align-items-center px-5 py-4'>
        <h5>Your Cart (1): $45.00</h5>
        <button className='btn rounded-0 text-uppercase px-5 py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
          Checkout
        </button>
      </div>
      {
        cart.map((item, index) => (
          <div key={index}>
           <div key={index} className='container-fluid border d-flex justify-content-between align-items-center px-5 py-3'>
        <h5>{}</h5>
      </div>
      <div className='container-fluid border d-flex flex-column flex-md-row justify-content-between align-items-center'>
        <div className="col-12 col-md-5 p-5 mb-3 mb-md-0">
          <img src={item.image} className='img-fluid' alt="" />
        </div>
        <div className="col-12 col-md-7">
          <div className='container-fluid border d-flex justify-content-between align-items-center px-3 py-2 bg-light'>
            <h3>{item.title}</h3>
            <Link
              
              onClick={()=>remove(item.id)} 
            >
              Remove
            </Link>
          </div>
          <div className='container-fluid border d-flex align-items-center px-3 py-2 bg-light'>
            <h4 className='w-50 text-uppercase'>Prescription Type</h4>
            <h5 className='w-50'>Non Prescription</h5>
          </div>
          <div className='container-fluid border d-flex align-items-center px-3 py-3 bg-white'>
            <h5 className='border-end border-light pe-1'>Subtotal |</h5>
            <h5 className=''>Details</h5>
          </div>
          <div className='container-fluid border d-flex align-items-center pt-2 pb-4 bg-white'>
            <table className="table table-striped table-hover table-bordered bg-light w-100">
              <thead>
                <tr>
                  <th scope="col" className='h4'>Frame Price</th>
                  <th scope="col"></th>
                  <th scope="col" className='h4'>${item.price}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lens</td>
                  <td>1.50 Standard Index</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <td>Tint</td>
                  <td>Standard Lens Tint Dark Gray - 80%</td>
                  <td>Included</td>
                </tr>
                <tr>
                  <th>AR Anti-Reflection Coating</th>
                  <td>Standard Anti-Reflective Coating</td>
                  <td>Included</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='container-fluid border d-flex align-items-center px-3 py-3 bg-white'>
            <h5 className='w-50 border-end border-light pe-1'>Subtotal</h5>
            <div className='w-50 d-flex align-items-center'>
              <h5>Quantity </h5>
              <input type="number" min="1" className='w-25 h-50 ms-2' />
              <h4  className='h4  w-50 text-end py-2'>${item.price}</h4>
              </div>

          </div>
        </div>
      </div>
          </div>
        ))
      }
    
      
   
      <div className='container-fluid border d-flex justify-content-between align-items-center px-5 py-3 mt-5'>
        <h5>Order summary</h5>
      </div>
      <div className='container-fluid d-flex flex-column py-4 bg-light'>
  <div className='row flex-md-row justify-content-between align-items-start'>
    <div className="col-12 col-md-6 ps-4 mb-3 mb-md-0">
      <div className='container bg-white border d-flex flex-wrap py-4'>
        <h6 className='w-100 text-center' style={{ color: "#007b8f" }}>Use your Zenni rewards points</h6>
        <div className="w-50 text-end pe-3 mb-1 border-end">
          <h6>Join Zenni Rewards <i className="fas fa-question-circle"></i></h6>
          <button className='btn rounded-0 text-uppercase mb-3' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
            Let's Go
          </button>
        </div>
        <div className="w-50 text-center">
          <h6>Already a Zenni Reward Member</h6>
          <Link>Sign In</Link>
        </div>
      </div>
      
      <div className='container-fluid mt-4 d-flex flex-wrap py-4'>
        <div className='' style={{width:"45%"}}>
          <h6>Have a promo code?</h6>
          <p>(One promo code per order)</p>
        </div>
        <div className='' style={{width:"32%"}}>
          <input type="text" className='form-control w-100' />
        </div>
        <div className=' text-end' style={{width:"23%"}}>
          <button className='btn rounded-0 text-uppercase py-2' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
            Apply
          </button>
        </div>
      </div>
      
      <div className='container border bg-white mt-4 d-flex flex-wrap py-4'>
        <h6 className='w-100' style={{ color: "#007b8f" }}>Military, First Responder, Senior, Student, Teacher, Medical & Nurse 10% Discount</h6>
        <img src="https://s3.amazonaws.com/idme/developer/idme-buttons/assets/img/verify.svg" className='img-fluid w-50' alt="" />
      </div>
    </div>
    
    <div className="col-12 col-md-6 ps-4 mb-3 mb-md-0">
      <div className='container border bg-white d-flex flex-wrap py-4'>     
        <div className='w-100 d-flex px-3 my-3 justify-content-between'>
          <h6>Item(1)</h6>
          <h6>$45</h6>
        </div>
        <div className='w-100 d-flex px-3 justify-content-between'>
          <div className='w-50 my-2'>
            <h2>Total (USD)</h2>
            <p className='my-2'>Shipping and Tax not yet included</p>
          </div>
          <h1 className='w-50 display-1 text-end fw-6 pt-3'>$45.00</h1>
        </div>
      </div>
      
      <div className='my-2 d-flex'>
        <button className='btn rounded-0 w-50 py-3 me-3 text-uppercase mb-3' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
          Continue Shopping
        </button>
        <button className='btn rounded-0 w-50 py-3 ms-3 text-uppercase mb-3' style={{ color: "#fff", fontWeight: "700", backgroundColor: "#007b8f", borderColor: "rgba(0,153,168,.5)" }}>
          Checkout
        </button>
      </div>
      <p className='w-100 text-end'>Pay over time with Paypal, Affirm or Afterpay.Learn More</p>
    </div>
  </div>
</div>
        </>
    }
      
      
     

    </>
  );
};

export default Cart;
