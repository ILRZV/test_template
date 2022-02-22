import React from "react";
import User from "./User/User";
import Button from "@material-ui/core/Button";
import classes from "./Users.module.css";

function Users(props) {
  let pagesCount =
    Math.floor((props.totalUsersCount - 0.01) / props.pageSize) + 1;

  let pages = [];
  let start = 1;
  let finish = pagesCount;
  let interval = 5;
  if (props.currentPage > interval) {
    start = +props.currentPage - interval;
  }
  if (pagesCount - props.currentPage > interval) {
    finish = +props.currentPage + interval;
  }
  for (let i = start; i <= finish; i++) {
    pages.push(i);
  }
  let inputPageChange = (event) => {
    let value = event.target.value;
    if (isNaN(value)) {
      event.target.value = value.slice(0, value.length - 1);
    } else {
      props.changeInput(event.target.value);
    }
  };

  let handleSearch = () => {
    if (props.input <= pagesCount) {
      props.changePage(+props.input);
      props.showUsers(+props.input);
    }
  };
  return (
    <div>
      {props.users.usersData.map((element) => (
        <User
          key={element.id}
          user={element}
          followUserThunk={props.followUserThunk}
          followingInProgress={props.followingInProgress}
          unfollowUserThunk={props.unfollowUserThunk}
        />
      ))}
      <div className={classes.footer}>
        {pages.map((element) => {
          return (
            <span
              className={
                element === props.currentPage
                  ? classes.highlightPage
                  : classes.navigation
              }
              onClick={() => {
                props.changePage(element);
                props.showUsers(element);
              }}
            >
              {element}{" "}
            </span>
          );
        })}
        <div className={classes.indexFind}>
          <p className="description">Choose page: from 1 to {pagesCount}</p>
          <input className="findInput" onChange={inputPageChange}></input>
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Find
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Users;
