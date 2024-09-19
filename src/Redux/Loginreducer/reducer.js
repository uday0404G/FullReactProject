import { DATA,  ERROR, LOADING,  } from "./actiontype";

const initial = {
  Data: [],
  loading: false,
  Error: true,
};
export const reducer = (state = initial, action) => {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        loading: false,
        Data: action.payload,
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
