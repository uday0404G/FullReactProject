import React, { useState } from 'react'
import { GoogleAuthProvider, getAuth ,signInWithPopup} from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
const provider=new GoogleAuthProvider();



const signIn = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result.user);
  })
  .catch((error) => {
    console.error(error);
  });
  
}
  return (
    <>
   
    <div className='border my-5 m-auto' style={{height:"100vh",width:"33%", backgroundColor:"#fafafa"}}>
      <div className="w-100">
        <button className='btn btn-white border-none w-50 fs-5'>SIGN IN</button>
        <button className='btn btn-white border-none w-50 fs-5'>CREATE ACCOUNT</button>
      </div>
      <form action="" className='w-100 mt-4 px-3'>
        <input type="email" className='w-100 p-2 ' placeholder='Email (Your@gmail.com)' required/><br /><br />
        <input type="password" className='w-100 p-2 ' placeholder='password' required /><br /><br />
        <input type="checkbox" name="" id="" /> Remember me <br /><br />
        <input type="checkbox" name="" id="" /> Join Zenni Rewards
        <br /><br />
<p>Yes, I want to join Zenni Rewards, reside in the U.S, and agree to the Rewards</p>
<button id="btn-sign-in" type="submit" class=" btn w-100 btn-dark" ><span>SIGN IN</span></button>
      </form><br /><br />
      <p style={{color:"#007b8f"}} className='text-center'>Forgot password?</p>
      <hr  className='mx-5'/>
      <h5 className='text-center'>
        Or
      </h5>
      <div className='w-100  d-flex text-center d-flex justify-content-center text-center'>
       
      <button onClick={signIn} 
            className='btn w-50' 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335)',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '5px'
            }}
          >
            <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
            Sign in with Google
          </button>
            </div>
    </div>
    </>
  )
}

export default Login