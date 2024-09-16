import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
  const google = new GoogleAuthProvider();
const auth = getAuth();

 const Googleauth = () => {
  signInWithPopup(auth, google)
   
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
      <div className='w-50  d-flex text-center d-flex justify-content-center'>
       
        <button onClick={Googleauth} className='btn w-75  btn-outline-secondary'>Sign in with Google</button>
      </div>
    </div>
    </>
  )
}

export default Login