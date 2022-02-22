import InputZone from "./InputZone";
import { Field, reduxForm } from "redux-form";
import { addPost, inputPost } from "../../../../redux/profileReducer";

import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profileData.postsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (date) => {
      dispatch(addPost(date));
    },
    changeInput: (text) => {
      dispatch(inputPost(text));
    },
  };
};

let formRedux = reduxForm({ form: "newPost" })(FormInput);
function FormInput() {
  return <InputZone />;
}

const InputZoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputZone);

export default InputZoneContainer;
