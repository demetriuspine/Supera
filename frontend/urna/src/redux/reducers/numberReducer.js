import { GET_NUMBER } from "../actions";

const INITIAL_STATE = {
  number: '',
};

const numberReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case GET_NUMBER:
    return {
      ...state,
      number: payload,
    };
  default:
    return state;
  }
};

export default numberReducer;