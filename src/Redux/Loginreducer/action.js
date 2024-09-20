import axios from "axios";
import { DATA, ERROR, LOADING, SIGNINDATA, USERINFO } from "./actiontype";
import Swal from "sweetalert2";

export const UserLoginData = (obj) => (dispatch) => {
  dispatch({ type: LOADING });

  axios
    .post("https://zenni-optical-api-1.onrender.com/User-details", obj)
    .then((res) => {
      dispatch({ type: DATA, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR });
    });
};
export const UserData =  (dispatch) => {
  dispatch({ type: LOADING });

  axios
    .get("https://zenni-optical-api-1.onrender.com/User-details")
    .then((res) => {
      dispatch({ type:  USERINFO, payload: res.data });
    })
    .catch((err) => {
      console.error("Error fetching user data:", err);
      dispatch({ type: ERROR });
      alert("An error occurred while fetching user data. Please try again.");
    });
};
export const SinInData = (obj) => (dispatch) => {
  dispatch({ type: LOADING });

  axios
    .get("https://zenni-optical-api-1.onrender.com/User-details")
    .then((res) => {
      const user = res.data.find((user) => user.Email === obj.Email);

      if (user) {
        if (user.Password === obj.Password) {
          dispatch({ type: SIGNINDATA, payload: user });
          Swal.fire({
            title: "Welcome To Zenni Optical Clone.",
            text: "Login successful",
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
          return true;
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Username or Password is Incorrect!",
          });
          return false;
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username or Password is Incorrect!",
        });
      }
    })
    .catch((err) => {
      console.error("Error fetching user data:", err);
      dispatch({ type: ERROR });
      alert("An error occurred while fetching user data. Please try again.");
    });
};
