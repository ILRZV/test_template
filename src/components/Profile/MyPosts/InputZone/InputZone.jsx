import React from "react";
import classes from "./InputZone.module.css";
import CreateIcon from "@material-ui/icons/Create";
import Button from "@material-ui/core/Button";

function InputZone(props) {
  let newElementRef = React.createRef();

  let handleChangeInput = () => {
    props.changeInput(newElementRef.current.value);
  };

  let handleAddPost = () => {
    let date = new Date();
    if (newElementRef.current.value.length > 0) props.addPost(date);
    newElementRef.current.value = "";
  };

  let handleClear = () => {
    props.changeInput("");
    newElementRef.current.value = "";
  };

  return (
    <div className={classes.container}>
      <div className={classes.create_post_info}>
        <CreateIcon color="primary" className={classes.create_post} />
        <span>Create post</span>
      </div>
      <textarea
        value={props.postsData.input}
        ref={newElementRef}
        placeholder="what's new?"
        className={classes.text_area}
        onChange={handleChangeInput}
      ></textarea>
      <div className={classes.post_buttons}>
        <Button color="primary" onClick={handleAddPost}>
          Add post
        </Button>
        <Button color="primary" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </div>
  );
}

export default InputZone;
