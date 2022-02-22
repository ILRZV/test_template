import React from "react";
import { Field, reduxForm } from "redux-form";

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="login" name={"login"} component="input" />
      </div>
      <div>
        <Field placeholder="password" name={"password"} component="input" />
      </div>
      <div>
        <Field name={"remeberMe"} type="checkbox" component="input" />
        <span>remeber me</span>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

function Login(props) {
  const onHandleSubmit = (formData) => {
    console.log(formData);
  };
  return <LoginReduxForm onSubmit={onHandleSubmit} />;
}

export default Login;
