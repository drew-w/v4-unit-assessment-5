const initialState = {
  username: "",
  profile_pic: "",
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
      const { username, profile_pic } = action.payload;
      console.log('hello!!!')
      return { username, profile_pic };
    case LOGOUT_USER:
      return { ...state };
    default:
      return state;
  }
}
