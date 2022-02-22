import Dialogs from "./Dialogs";
import { addMessage, inputMessage } from "../../redux/dialogsReducer";

import { connect } from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData,
  };
};

export default compose(
  connect(mapStateToProps, { inputMessage, addMessage }),
  withAuthRedirect
)(Dialogs);
