import React from "react";
import classes from "./Post.module.css";
import avatar from "../../../../images/Girl.jpg";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import unknownUser from "../../../../images/avatarWithoutPhoto.png";
import { CircularProgress } from "@material-ui/core";

function Post(props) {
  let date = new Date(
    props.date.year,
    props.date.month,
    props.date.day,
    props.date.hours,
    props.date.minutes
  );
  let handleLike = () => {
    props.likePost(props.id);
  };
  return (
    <>
      {props.userProfile === null ? (
        <div></div>
      ) : (
        <div className={classes.item}>
          <div className={classes.header}>
            <img src={props.userProfile.photos.small || unknownUser} />
            <div className={classes.info}>
              <p className={classes.author}>{props.author}</p>
              <p className={classes.date}>
                {date.getHours()}:
                {date.getMinutes() < 10
                  ? "0" + date.getMinutes()
                  : date.getMinutes()}{" "}
                {date.getFullYear()}-{date.getMonth()}-{date.getDate()}
              </p>
            </div>
          </div>
          <p>{props.message}</p>
          <div className={classes.footer}>
            <Divider />
            <p className={classes.likes}>
              {props.isLiked ? "💙" : "♡"} {props.likeCounter}
            </p>
            <div className={classes.control}>
              <Button color="primary" onClick={() => handleLike()}>
                Like ♡
              </Button>
              <Button color="primary">
                <ShareIcon />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Post;
