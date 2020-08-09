import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Order from "../Product/Order";
import ProductAdmin from "../Product/ProductAdmin";
import Cart from "../Product/Cart";
import Home from "./Home";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import Auth from "../Auth/Auth";
import Pagination from "./Pagination"

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authPage:true
    };
  }
  handleAuth=(auth)=>this.setState({authPage:auth})

  render() {
    const{authPage} = this.state
    return (
      <>
         <Navigation />
        {/* <Pagination/> */}
        <hr />
        
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/order" component={Order} />
        <Route path="/product" component={ProductAdmin} /> 
        <Route path="/auth" render={props=><Auth authPage={authPage} {...props} login={<Login authPage={authPage} handleAuth={this.handleAuth} />} signup={<Signup authPage={authPage} handleAuth={this.handleAuth}/>} />}/>
        <Footer />
      </>
    );
  }
}
