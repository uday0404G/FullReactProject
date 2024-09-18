import React, { useState } from 'react'
import { GoogleAuthProvider, getAuth ,signInWithPopup} from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
const Login = () => {
const provider=new GoogleAuthProvider();

const [Login,setLogin]=useState(false)

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
    {
      Login ?  
      <div className="container">

      <div className='border my-5 m-auto col-12 col-md-5' style={{height:"auto", backgroundColor:"#fafafa"}}>
      <div className="w-100">
        <button className='btn btn-white border-none w-50 fs-5'  onClick={()=>{setLogin(true)}} >SIGN IN</button>
        <button className='btn btn-white border-none w-50 fs-5'  onClick={()=>{setLogin(false)}}>CREATE ACCOUNT</button>
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
      <div className='w-100  d-flex  mb-4 text-center d-flex justify-content-center text-center'>
       
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
    </div>

    :  
    <div className="container">

     <div className='border my-5 m-auto col-12 col-md-5' style={{height:"auto", backgroundColor:"#fafafa"}}>
      <div className="w-100">
        <button className='btn btn-white border-none w-50 fs-5' onClick={()=>{setLogin(true)}}>SIGN IN</button>
        <button className='btn btn-white border-none w-50 fs-5' onClick={()=>{setLogin(false)}}>CREATE ACCOUNT</button>
      </div>
      <div className='w-100  d-flex text-center flex-wrap d-flex justify-content-center text-center my-4'>
       
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
          <span className='my-3 w-75'>Fewer passwords, less headaches: Keep everything simple and secure by signing up with your Google account.</span>
            <h6 className='text-secondary w-75'>Or sign up with your email</h6>
            </div>
      <form action="" className='w-100 mt-4 px-3 '>
        <input type="email" className='w-50 p-2 ' placeholder='First Name' required/> 
        <input type="email" className='w-50 p-2 ' placeholder='Last Name' required/><br /><br />  
        <input type="email" className='w-100 p-2 ' placeholder='Email (Your@gmail.com)' required/><br /><br />
        <input type="password" className='w-100 p-2 ' placeholder='password' required /><br /><br />
        <input type="checkbox" name="" id="" /> Remember me <br /><br />
        <input type="checkbox" name="" id="" /> Join Zenni Rewards
        <br /><br />
<p>Yes, I want to join Zenni Rewards, reside in the U.S, and agree to the Rewards</p>
<button id="btn-sign-in" type="submit" class=" btn w-100 btn-dark" ><span>CREATE ACCOUNT</span></button>
      </form><br />
      <p style={{color:"#007b8f"}} className='text-center'>Privacy</p>
  
     
    
    </div>
    </div>
    }
   
    </>
  )
}

export default Login