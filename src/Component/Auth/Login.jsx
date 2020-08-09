
import React from "react";
import { validAdminLogin , showLoginPage} from "./AuthRedux/actionCreators";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import  "./login.css"

class Login extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
      username: "",
      password: ""
  };
}

handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

handleLogin = ()=>{
  const { username, password } = this.state;
    const value = {
      username, password
    };
  
    if(username==="" && username==="" ){
      alert("please fill it properly")
    }else{
      this.props.validAdminLogin(value,(value)=>{alert(value)})
      
    }
}

render() {

  
  if(this.props.isLogin){
    return <Redirect to="/"/>
  }


  if(this.props.loginPage){
    return "login"
  }
  const { validAdminLogin,authPage,handleAuth } = this.props;
  const { username, password,name,description,mobile,email } = this.state;
  return (
    <>
    
      <div className="bg-white">
          <div className="loginContainer ">
            <div className="login m-4" style={{borderRadius:10}}>
              <h2
                style={{
                  fontWeight: "600",
                  color: "rgb(61, 60, 60)"
                }}
              >
               <i class="far fa-user loginLogo"></i>  LOGIN
              </h2>
              <input
                className="d-block w-100 loginInput"
                placeholder="Username"
                required
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                className="d-block w-100 loginInput"
                placeholder="Password"
                required
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <button
               onClick={this.handleLogin } 
               className="loginButton">
                LOGIN
              </button>
                 {/* for pssword reset  */}
             <div className="mt-4" style={{ fontSize: 14 }}>
             
              <span
                className="float-right"
                style={{ cursor: "pointer" }}
                onClick={()=>handleAuth(!authPage)}
              >
                <b>New to Shopihy?</b> Create Account
              </span>
            </div>
              
            </div>
          </div>
        </div>
    </>
  );
}
}
const mapStateToProps = state =>({
loginData:state.auth.loginData,
isLogin:state.auth.isLogin
})

const mapDispatchToProps = dispatch => ({
validAdminLogin: data => dispatch(validAdminLogin(data))
});
export default connect(
mapStateToProps,
mapDispatchToProps
)(Login);