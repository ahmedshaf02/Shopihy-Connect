import React from "react";
import { validAdminSignup, showSignupPage } from "./AuthRedux/actionCreators";
import { connect } from "react-redux";
import  "./login.css"

  
  class Signup extends React.Component {
    constructor(props) {
      super(props);
    this.state = {
        name: "",
        username: "",
        password: "",
        email: "",
        mobile: "",
        description: "user to visit shopping site"
    };
  }
  
  // handleClick =()=>{
  //   const{history} = this.props
  //   history.push("/signup")
  // }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  handleLogin = ()=>{
    const { username, password,name,description,mobile,email } = this.state;
      const value = {
        username, password,name,description,mobile,email
      };
    
      if(name==="" && mobile==="" && username==="" && email==="" && mobile===""){
        alert("please fill it properly")
      }else{
        this.props.validAdminSignup(value,(value)=>{alert(value)})
        
                  // if(this.props.loginData.status===200){
                  //   alert(this.props.loginData.message)
                  // }
      }
  }

  render() {
    // if(isLogin){
    //   return <Redirect to="/product"/>
    // }
    // if(this.props.isLogin){

    //   if(this.props.isLogin){
    //     if(this.props.loginData.status===200){
    //       // alert(this.props.loginData.data.message)
    //     }
        
    //   }else{
    //   }
    // }
  const {loginData} = this.props
const error = loginData.error
const message = loginData.message

    if(error===false){
      alert(message)
    }

  console.log(this.props)
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
               <i class="fas fa-user signupLogo" ></i>  Sign Up
              </h2>
              <input
                className="d-block w-100 loginInput"
                placeholder="Full Name"
                required
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <input
                className="d-block w-100 loginInput"
                placeholder="you@mail.com"
                required
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
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
              <input
                className="d-block w-100 loginInput"
                placeholder="Mobile Number"
                required
                name="mobile"
                value={this.state.mobile}
                onChange={this.handleChange}
              />
              <button
               onClick={()=>this.handleLogin() } 
               className="loginButton">
                SIGN UP
              </button>

              {/* for pssword reset  */}
              <div className="mt-4">
                <span className="">Already have an account ?</span>
                <span
                  className=""
                  style={{ cursor: "pointer" }}
                  onClick={()=>handleAuth(!authPage)}
                >
                  <b>Log In</b>
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
})

const mapDispatchToProps = dispatch => ({
  validAdminSignup: data => dispatch(validAdminSignup(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
