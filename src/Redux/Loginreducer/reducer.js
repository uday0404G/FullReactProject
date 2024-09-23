import { CART, DATA,  ERROR, LOADING, SIGNINDATA, UDATA, USERINFO,  } from "./actiontype";

const initial = {
  LoginData: [],
  UserInfo:[],
  SigninData:[],
  UData:[],
  Cart:[],
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
        case CART:
          return {
            ...state,
            loading: false,
            Cart: action.payload,
          };
        case UDATA:
          return {
            ...state,
            loading: false,
            UData: action.payload,
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
