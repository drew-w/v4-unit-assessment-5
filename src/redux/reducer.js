const initialState = {
  // username: "",
  // profile_pic: "",
  user: null
};

const STORE_USER_INFO = "STORE_USER_INFO";
const LOGOUT_USER = "LOGOUT_USER";

export const updateUser = (data) => {
  return {
    type: STORE_USER_INFO,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT_USER,
    payload: "",
  };
};

export default function reducer(state = initialState, action) {
  
  switch (action.type) {
    case STORE_USER_INFO:
      return {...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}
