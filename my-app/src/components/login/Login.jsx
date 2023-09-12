import { connect } from "react-redux";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { Navigate } from 'react-router-dom';

const LoginForm = ({handleSubmit}) => {
  return(
  <form onSubmit={handleSubmit}>
    <div>
      <Field name={"email"} component={"input"} placeholder={"Email"} />
    </div>
    <div>
      <Field name={"password"} component={"input"} placeholder={"Password"} />
    </div>
    <div>
      <Field component={"input"} type={"checkbox"} name={"rememberMe"} />{" "}
      remember me
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
  )
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit=(formData)=>{
props.login(formData.email, formData.password, formData.rememberMe);
  }

  if(props.isAuth){
    return <Navigate to="/profile" replace={true}/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, {login})(Login);
