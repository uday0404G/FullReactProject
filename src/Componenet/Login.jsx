import React, { useState, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { SinInData, UserData, UserLoginData } from "../Redux/Loginreducer/action";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const [Login, setLogin] = useState(false);
  const [Signininfo, setSignininfo] = useState({
    Email: "",
    Password: "",
  });
  const [Userinfo, setUserinfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  const dispatch = useDispatch();
  const store = useSelector((s) => s);

  const SigninData = (e) => {
    let { name, value } = e.target;
    setSignininfo({ ...Signininfo, [name]: value });
  };
  const SigninSubmit = (e) => {
    e.preventDefault();
    setSignininfo({
      Email: "",
      Password: "",
    });
  };
  const nevigate = useNavigate();
  const SigninClick = () => {
    dispatch(SinInData(Signininfo)).then((success) => {
      if (success) {
        nevigate("/");
      }
    });
  };

  const Logindata = (e) => {
    let { name, value } = e.target;
    setUserinfo({ ...Userinfo, [name]: value });
  };
  const LoginSubmit = (e) => {
    e.preventDefault();
    setUserinfo({
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
    });
  };
  const LoginClick = () => {
    const existingUser = store.UserInfo.find((el) => el.Email === Userinfo.Email);

    if (existingUser) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Youre Email Alrady Registerd!",
      });
      setLogin(true)
    } else {
      dispatch(UserLoginData(Userinfo));
      Swal.fire({
        title: "Welcome To Zenni Optical Clone.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `,
      });
      localStorage.setItem("IsLogin",true)
      nevigate("/")
    }
  };
  useEffect(() => {
    dispatch(UserData);
  }, []);

  const Googleauth = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
  
      
      const userinfo = {
        FirstName: result.user.displayName.split(" ")[0],
        LastName: result.user.displayName.split(" ")[1] || "",
        Email: result.user.email,
        PhotoURL: result.user.photoURL,
        Password: "", 
      };
  
      
      const existingUser = store.UserInfo.find((el) => el.Email === userinfo.Email);
  
      if (existingUser) {
     
        Swal.fire({
          title: "Welcome Back to Zenni Optical Clone!",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
        localStorage.setItem("IsLogin", true); 
        nevigate("/"); 
      } else {
      
        await dispatch(UserLoginData(userinfo));

        Swal.fire({
          title: "Welcome to Zenni Optical Clone!",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
        localStorage.setItem("IsLogin", true); 
        nevigate("/"); 
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };
  
  
  
 
  return (
    <>
      {Login ? (
        <div className="container">
          <div
            className="border my-5 m-auto col-12 col-md-5"
            style={{ height: "auto", backgroundColor: "#fafafa" }}
          >
            <div className="w-100">
              <button
                className="btn btn-white border-none w-50 fs-5"
                onClick={() => {
                  setLogin(true);
                }}
              >
                SIGN IN
              </button>
              <button
                className="btn btn-white border-none w-50 fs-5"
                onClick={() => {
                  setLogin(false);
                }}
              >
                CREATE ACCOUNT
              </button>
            </div>
            <form action="" className="w-100 mt-4 px-3" onSubmit={SigninSubmit}>
              <input
                type="email"
                className="w-100 p-2 "
                name="Email"
                value={SigninData.Email}
                onChange={SigninData}
                placeholder="Email (Your@gmail.com)"
                required
              />
              <br />
              <br />
              <input
                type="password"
                className="w-100 p-2 "
                name="Password"
                value={SigninData.Password}
                onChange={SigninData}
                placeholder="password"
                required
              />
              <br />
              <br />
              <input type="checkbox" name="" id="" /> Remember me <br />
              <br />
              <input type="checkbox" name="" id="" /> Join Zenni Rewards
              <br />
              <br />
              <p>
                Yes, I want to join Zenni Rewards, reside in the U.S, and agree
                to the Rewards
              </p>
              <button
                id="btn-sign-in"
                onClick={SigninClick}
                type="submit"
                class=" btn w-100 btn-dark"
              >
                <span>SIGN IN</span>
              </button>
            </form>
            <br />
            <br />
            <p style={{ color: "#007b8f" }} className="text-center">
              Forgot password?
            </p>
            <hr className="mx-5" />
            <h5 className="text-center">Or</h5>
            <div className="w-100  d-flex  mb-4 text-center d-flex justify-content-center text-center">
              <button
                onClick={Googleauth}
                className="btn w-50"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335)",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  style={{ marginRight: "8px" }}
                />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div
            className="border my-5 m-auto col-12 col-md-5"
            style={{ height: "auto", backgroundColor: "#fafafa" }}
          >
            <div className="w-100">
              <button
                className="btn btn-white border-none w-50 fs-5"
                onClick={() => {
                  setLogin(true);
                }}
              >
                SIGN IN
              </button>
              <button
                className="btn btn-white border-none w-50 fs-5"
                onClick={() => {
                  setLogin(false);
                }}
              >
                CREATE ACCOUNT
              </button>
            </div>
            <div className="w-100  d-flex text-center flex-wrap d-flex justify-content-center text-center my-4">
              <button
                onClick={Googleauth}
                className="btn w-50"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335)",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <FontAwesomeIcon
                  icon={faGoogle}
                  style={{ marginRight: "8px" }}
                />
                Sign in with Google
              </button>
              <span className="my-3 w-75">
                Fewer passwords, less headaches: Keep everything simple and
                secure by signing up with your Google account.
              </span>
              <h6 className="text-secondary w-75">
                Or sign up with your email
              </h6>
            </div>
            <form action="" className="w-100 mt-4 px-3 " onSubmit={LoginSubmit}>
              <input
                type="text"
                className="w-50 p-2 "
                name="FirstName"
                value={Userinfo.FirstName}
                onChange={Logindata}
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="w-50 p-2 "
                name="LastName"
                value={Userinfo.LastName}
                onChange={Logindata}
                placeholder="Last Name"
                required
              />
              <br />
              <br />
              <input
                type="email"
                className="w-100 p-2 "
                name="Email"
                value={Userinfo.Email}
                onChange={Logindata}
                placeholder="Email (Your@gmail.com)"
                required
              />
              <br />
              <br />
              <input
                type="password"
                className="w-100 p-2 "
                name="Password"
                value={Userinfo.Password}
                onChange={Logindata}
                placeholder="password"
                required
              />
              <br />
              <br />
              <input type="checkbox" name="" id="" /> Remember me <br />
              <br />
              <input type="checkbox" name="" id="" /> Join Zenni Rewards
              <br />
              <br />
              <p>
                Yes, I want to join Zenni Rewards, reside in the U.S, and agree
                to the Rewards
              </p>
              <button
                id="btn-sign-in"
                onClick={LoginClick}
                type="submit"
                class=" btn w-100 btn-dark"
              >
                <span>CREATE ACCOUNT</span>
              </button>
            </form>
            <br />
            <p style={{ color: "#007b8f" }} className="text-center">
              Privacy
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
