
import React from "react";
import { connect } from "react-redux";

export default class Auth extends React.Component {
  
  
render() {
  const {children,login,signup,authPage} = this.props
  console.log(this.props)
  return (
    <>
        {children}
      {authPage?login:signup}
    </>
  );
}
}