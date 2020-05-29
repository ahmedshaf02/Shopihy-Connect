import React from "react";
import "./styles.css";
import HomePage from "./Component/Common/HomePage";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      {/* {props.modifyCount} */}
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => ({
  modifyCount: state.count
});
export default connect(
  mapStateToProps,null
)(App);
