import axios from "axios";
import { DATA, ERROR, LOADING } from "./actiontype";

export const UserLoginData = (dispatch) => (obj)=>{
    dispatch({ type: LOADING });
    axios.post("http://localhost:3000/User-details",(obj))
        .then((res) => {
            dispatch({ type: DATA, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: ERROR});
        });
};
