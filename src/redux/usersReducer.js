import { Users } from "../api/api";

const followUserRequestText = "FOLLOW_USER";
const unFollowUserRequestText = "UNFOLLOW_USER";
const newUsersRequestText = "SET_USERS";
const changePageRequestText = "CHANGE_PAGE";
const setUsersCountRequestText = "SET_COUNT";
const isLoadingRequestText = "IS_LOADING";
const toggleIsFollowingProgress = "TOOGLE_IS_FOLLOWING_PROGRESS";
const changeInputText = "CHANGE_INPUT";

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
  followingInProgress: [],
  inputText: "",
};

export default function usersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case followUserRequestText:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };
    case unFollowUserRequestText:
      return {
        ...state,
        usersData: state.usersData.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };
    case newUsersRequestText:
      return {
        ...state,
        isLoading: false,
        usersData: [...action.users],
      };
    case changePageRequestText:
      return {
        ...state,
        currentPage: action.page,
      };
    case setUsersCountRequestText:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case isLoadingRequestText:
      return {
        ...state,
        isLoading: true,
      };
    case toggleIsFollowingProgress:
      return {
        ...state,
        followingInProgress: !action.isFetching
          ? [
              ...state.followingInProgress.filter(
                (id) => id !== action.fetchingId
              ),
            ]
          : [...state.followingInProgress, action.fetchingId],
      };
    case changeInputText:
      return {
        ...state,
        inputText: action.input,
      };
    default:
      return state;
  }
}

export const followUser = (id) => ({
  type: followUserRequestText,
  userId: id,
});
export const unFollowUser = (id) => ({
  type: unFollowUserRequestText,
  userId: id,
});
export const setUsers = (users) => ({
  type: newUsersRequestText,
  users,
});
export const changePage = (page) => ({
  type: changePageRequestText,
  page,
});
export const setUsersCount = (count) => ({
  type: setUsersCountRequestText,
  count,
});
export const changeLoading = () => ({
  type: isLoadingRequestText,
});
export const toggleFollowingProgress = (isFetching, fetchingId) => ({
  type: toggleIsFollowingProgress,
  fetchingId,
  isFetching,
});
export const changeInput = (input) => ({
  type: changeInputText,
  input,
});

export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    Users.getUsers(currentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersCount(data.totalCount));
    });
  };
};

export const followUserThunk = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    Users.postFollowUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followUser(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};

export const unfollowUserThunk = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    Users.deleteFollowUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollowUser(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};
