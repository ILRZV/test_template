import { Profile } from "../api/api";

const ADD_POST = "ADD_POST";
const INPUT_POST = "INPUT_POST";
const LIKE_POST = "LIKE_POST";
const SET_NEW_USER = "NEW_USER";
const SET_STATUS = "SET_STATUS";

let initialState = {
  postsData: [
    {
      id: 1,
      date: { day: 24, month: 10, year: 2018, hours: 12, minutes: 56 },
      message: "Dont panic",
      likeCounter: 20,
      isLiked: false,
    },
    {
      id: 2,
      date: { day: 2, month: 3, year: 2019, hours: 22, minutes: 8 },
      message: "IS it somebody here",
      likeCounter: 25,
      isLiked: false,
    },
    {
      id: 3,
      date: { day: 14, month: 3, year: 2019, hours: 16, minutes: 21 },
      message: "I can't hear anything",
      likeCounter: 60,
      isLiked: false,
    },
    {
      id: 4,

      date: { day: 30, month: 5, year: 2020, hours: 0, minutes: 28 },
      message: "Where am i",
      likeCounter: 10,
      isLiked: false,
    },
    {
      id: 5,

      date: { day: 1, month: 7, year: 2020, hours: 13, minutes: 2 },
      message: "I think that i'm in capture",
      likeCounter: 20,
      isLiked: false,
    },
    {
      id: 6,
      date: { day: 10, month: 9, year: 2020, hours: 10, minutes: 30 },
      message: "What",
      likeCounter: 202,
      isLiked: false,
    },
  ],
  input: "",
  author: "Martial Anna",
  user: null,
  status: "",
};

export default function dialogsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_POST:
      console.log(state.postsData);
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: +state.postsData[state.postsData.length - 1].id + 1,
            date: {
              day: action.date.getDate(),
              month: action.date.getMonth(),
              year: action.date.getFullYear(),
              hours: action.date.getHours(),
              minutes: action.date.getMinutes(),
            },
            message: state.input,
            likeCounter: 0,
          },
        ],
        input: "",
      };
    case INPUT_POST:
      return {
        ...state,
        input: action.newInput,
      };
    case LIKE_POST:
      return {
        ...state,
        postsData: state.postsData.map((element) => {
          if (element.id === action.id) {
            let likes = element.likeCounter;
            element.isLiked ? --likes : ++likes;
            return {
              ...element,
              isLiked: !element.isLiked,
              likeCounter: likes,
            };
          }
          return element;
        }),
      };
    case SET_NEW_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}

export const addPost = (date) => {
  return {
    type: ADD_POST,
    date: date,
  };
};
export const inputPost = (text) => ({
  type: INPUT_POST,
  newInput: text,
});
export const likePost = (id) => ({
  type: LIKE_POST,
  id,
});
export const setNewUser = (user) => ({
  type: SET_NEW_USER,
  user,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const getUserProfile = (id) => (dispatch) => {
  return Profile.getUserProfile(id).then((data) => {
    dispatch(setNewUser(data));
  });
};

export const getStatus = (id) => (dispatch) => {
  return Profile.getUserStatus(id).then((data) => {
    dispatch(setStatus(data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  return Profile.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
