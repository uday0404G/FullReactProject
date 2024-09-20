import { DATA,  ERROR, LOADING, SIGNINDATA, USERINFO,  } from "./actiontype";

const initial = {
  LoginData: [],
  UserInfo:[],
  SigninData:[],
  loading: false,
  Error: true,
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        loading: false,
        LoginData: action.payload,
      };
      case USERINFO:
      return {
        ...state,
        loading: false,
        UserInfo: action.payload,
      };
      case SIGNINDATA:
        return {
          ...state,
          loading: false,
          SigninData: action.payload,
        };
    case LOADING:
      return {
        loading: true,
      };
    case ERROR:
      return {
        Error: true,
      };
      default:
        return state;
  }
};
