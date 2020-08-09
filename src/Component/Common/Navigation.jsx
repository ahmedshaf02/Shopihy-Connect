import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./commonStyles.css";
import { connect } from "react-redux";

const Styles = {
  logoName: {
    fontSize: 30,
    marginLeft: 10
  },
  navLink: {
    color: "black",
    padding: "8px 12px",
    fontSize: 18,
    textDecoration: "none",
    fontWeight: 300,
    opacity: 0.9,
    margin: 10
  },
  navLink1: {
    color: "black",
    padding: "12px 14px",
    fontSize: 18,
    textDecoration: "none",
    fontWeight: 300,
    opacity: 0.9
  },
  cartLength: {
    position: "relative",
    left: -14,
    top: -16
  }
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { cartArr } = this.props;
    const value = cartArr.length;
    console.log(this.props);
    return (
      <>
        <div>
          <span style={Styles.logoName}> React-Connect</span>

          <img
            width="100"
            className="img-fluid"
            src="https://st2.depositphotos.com/5142301/11420/v/950/depositphotos_114200716-stock-illustration-letter-r-logo-in-play.jpg"
            alt="logo react-connect"
          />
        </div>
        <ul className="nav justify-content-center">
          <li>
            <NavLink exact className="navLink" to="/" style={Styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/cart" style={Styles.navLink1}>
              Cart <i class="fas fa-shopping-cart" />
              <span style={Styles.cartLength}>{value ? value : ""}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/product" style={Styles.navLink}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/order" style={Styles.navLink}>
              Order
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/auth" style={Styles.navLink}>
              Login
            </NavLink>
          </li>
        </ul>
      </>
    );
  }
}

const mapStateToProps = state => ({
  productData: state.app.productData,
  shoppingArrData: state.app.shoppingArrData,
  cartArr: state.app.cartArrData
});

export default connect(
  mapStateToProps,
  null
)(Navigation);
