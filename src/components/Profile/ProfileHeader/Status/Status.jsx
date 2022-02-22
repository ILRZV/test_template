import React, { useState, useEffect } from "react";
import * as axios from "axios";

function Status(props) {
  let [userStatus, setUserStatus] = useState(props.status);
  let [isModified, setIsModified] = useState(false);
  const baseUrl = "https://social-network.samuraijs.com/api/1.0/";
  useEffect(() => {
    setUserStatus(props.status === null ? "hello" : props.status);
  }, [props.status]);
  let inputChange = (event) => {
    setUserStatus(event.target.value);
  };
  let activateEditMode = () => {
    setIsModified(!isModified);
  };

  let deactivateEditMode = () => {
    setIsModified(!isModified);
  };
  return (
    <div>
      {isModified ? (
        <input
          autoFocus={true}
          value={userStatus === null ? "hello" : userStatus}
          onChange={inputChange}
          onBlur={deactivateEditMode}
        ></input>
      ) : (
        <p onDoubleClick={activateEditMode}>{userStatus}</p>
      )}
    </div>
  );
}

export default Status;
