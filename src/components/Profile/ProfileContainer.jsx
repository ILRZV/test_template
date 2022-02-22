import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
} from "../../redux/profileReducer";
import { followUserThunk, unfollowUserThunk } from "../../redux/usersReducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainerAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let id;
    this.props.match.params.userID !== undefined
      ? (id = this.props.match.params.userID)
      : this.props.id !== null
      ? (id = this.props.id)
      : (id = 19031);
    this.props.getUserProfile(id);
    this.props.getStatus(id);
  }
  render() {
    return <Profile data={this.props} updateStatus={this.props.updateStatus} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userProfile: state.profileData.user,
    status: state.profileData.status,
    id: state.authData.userId,
  };
};

let Connected = compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    followUserThunk,
    unfollowUserThunk,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainerAPI);

export default Connected;
