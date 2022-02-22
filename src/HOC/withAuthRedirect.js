import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let withAuthRedirect = (Component) => {
  let authRedirect = (props) => {
    if (!props.isAuth) return <Redirect to="/login" />;
    return <Component {...props} />;
  };

  let mapStateToProps = (state) => {
    return {
      isAuth: state.authData.isLogin,
    };
  };

  let connectedAuthRedirect = connect(mapStateToProps)(authRedirect);
  return connectedAuthRedirect;
};

export default withAuthRedirect;
