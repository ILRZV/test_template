import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import classes from "./Profile.module.css";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileNavigation from "./ProfileNavigation/ProfileNavigation";

function Profile(props) {
  debugger;
  return (
    <div className={classes.profile_wrapper}>
      <ProfileHeader
        userProfile={props.data.userProfile}
        status={props.data.status}
        updateStatus={props.updateStatus}
        followUserThunk={props.data.followUserThunk}
        unfollowUserThunk={props.data.unfollowUserThunk}
      />
      <div className={classes.profile_content}>
        <ProfileNavigation />
        <MyPostsContainer />
      </div>
    </div>
  );
}

export default Profile;
