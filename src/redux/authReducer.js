import { Auth } from "../api/api";

const setUserDataRequestText = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLogin: false,
};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case setUserDataRequestText:
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };
    default:
      return state;
  }
}

export const setUserData = (userId, email, login) => ({
  type: setUserDataRequestText,
  data: { userId, email, login },
});

export const getAuthMeThunk = () => {
  return (dispatch) => {
    Auth.getAuthMe().then((data) => {
      let { email, id, login } = data;
      dispatch(setUserData(id, email, login));
    });
  };
};
