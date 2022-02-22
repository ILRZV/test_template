import { connect } from "react-redux";
import {
  changePage,
  changeLoading,
  getUsersThunk,
  followUserThunk,
  unfollowUserThunk,
  changeInput,
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

class UsersContainerAPI extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
  }
  showUsers = (pageNum) => {
    this.props.changeLoading();
    this.props.getUsersThunk(pageNum, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? (
          <CircularProgress />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            changePage={this.props.changePage}
            showUsers={this.showUsers}
            users={this.props.users}
            isLoading={this.props.isLoading}
            followingInProgress={this.props.followingInProgress}
            followUserThunk={this.props.followUserThunk}
            unfollowUserThunk={this.props.unfollowUserThunk}
            changeInput={this.props.changeInput}
            input={this.props.input}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersData,
    pageSize: state.usersData.pageSize,
    totalUsersCount: state.usersData.totalUsersCount,
    currentPage: state.usersData.currentPage,
    isLoading: state.usersData.isLoading,
    followingInProgress: state.usersData.followingInProgress,
    input: state.usersData.inputText,
  };
};

const UsersContainer = connect(mapStateToProps, {
  changePage,
  changeLoading,
  getUsersThunk,
  followUserThunk,
  unfollowUserThunk,
  changeInput,
})(UsersContainerAPI);

export default UsersContainer;
