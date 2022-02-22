import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData, getAuthMeThunk } from "../../redux/authReducer";
import { followUserThunk, unfollowUserThunk } from "../../redux/usersReducer";

class HeaderComponentAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAuthMeThunk();
  }
  render() {
    return <Header dataUser={this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.authData.login,
    email: state.authData.email,
    userId: state.authData.userId,
    isLogin: state.authData.isLogin,
  };
};
let HeaderComponent = connect(mapStateToProps, {
  setUserData,
  getAuthMeThunk,
  followUserThunk,
  unfollowUserThunk,
})(HeaderComponentAPI);
export default HeaderComponent;
