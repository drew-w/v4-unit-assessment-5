const initialState = {
  username: "",
  profilePicture: "",
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
    case STORE_USER_INFO + "_FULFILLED":
      const { username, profilePicture } = action.payload;
      return { username, profilePicture };
    case STORE_USER_INFO:
      return { username, profilePicture };
    case LOGOUT_USER:
      return { ...state };
    case LOGOUT_USER + "_FULFULLED":
      return { ...state };
    default:
      return state;
  }
}
