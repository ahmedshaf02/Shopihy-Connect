
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import {connect} from "react-redux"
import {addOrderProduct} from "../../Redux/actionCreators"

const Styles={
  orderBackground:{
    backgroundColor:"#F5FEFF",
    borderRadius:10
  },
  orderImg:{
    height:300,
    borerRadius:10
  },
  spacing:{
    margin:10
  }

}
 class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {orderArr} = this.props
    if(orderArr.length===0){
      return (

      <div style={{textAlign:"center"}}>

        <h1 style={{textAlign:"center",height:""}}>Your Order list is empty</h1>
        <img style={Styles.orderImg} src="https://cdn.dribbble.com/users/363634/screenshots/4200296/emptyscreengraphic.jpg" alt="order"/>
      </div>
      )
    }
    return (
      <>
        <div className="container">
          <h1 style={{textAlign:"center"}}>Your Successful Ordered products</h1>

        <div className="row" >
          {
            orderArr && orderArr.map(ele=>(
          <>
            <div className="col-12  col-sm-6 col-md-6 col-lg-5 text-center">
                <div>
                    <img style={Styles.orderImg} src={ele.imageUrl} alt={ele.name}/>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 m-2" style={Styles.orderBackground}>
                <div style={Styles.spacing} className="p-2">Product: {ele.name}</div>
                <div style={Styles.spacing} className="p-2"><span>Price: {ele.cost}</span><span className="p-2">Category: {ele.select}</span></div>
                <div style={Styles.spacing} className="p-2">Product UUID: {ele.id}</div>
                <div style={Styles.spacing} className="p-2">Total Qty: {ele.qty}</div>
                <div style={Styles.spacing} className="p-2">About: {ele.desc}</div>
            </div>
          </>
            ))
          }
        </div>
        </div>
      </>
    );
  }
}



const mapStateToProps=state=>({
  orderArr : state.app.orderArrData
})

export default connect(mapStateToProps,null)(Order)