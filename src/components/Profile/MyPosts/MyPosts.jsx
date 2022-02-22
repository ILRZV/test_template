import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import InputZoneContainer from "./InputZone/InputZoneContainer";

function MyPosts(props) {
  let postsElements = props.postsData
    .map((element) => (
      <Post
        message={element.message}
        date={element.date}
        author={props.author}
        isLiked={element.isLiked}
        key={element.id}
        id={element.id}
        likeCounter={element.likeCounter}
        likePost={props.likePost}
        userProfile={props.userProfile}
      />
    ))
    .reverse();
  return (
    <div className={classes.container}>
      <InputZoneContainer />
      <div className={classes.postContainer}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
