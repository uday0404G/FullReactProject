import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./Loginreducer/reducer";
import { thunk } from "redux-thunk";


 const store=legacy_createStore(reducer,applyMiddleware(thunk))
 

 export default(store)