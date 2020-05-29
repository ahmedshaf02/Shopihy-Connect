
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {addToCart,removeCart,addToQty,subToQty} from "../../Redux/actionCreators"
import CartModal from "./CartModal";

const Styles={
  cardBody:{
    display:"flex",
    flexDirection:"column",
    borderRadius:10
  },
  cardDisplay:{
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"flexStart",
    flexWrap:"wrap"
  },
  cardBack:{
    width: 200,
  height: 200,
  backgroundColor: "coral",
  borderRadius: 4,
  outline:"none"
  },
  cardBottom:{
    display: "flex",
    justifyContent:"space-evenly",
    alignItems:"flex-end",
    borderRadius:3
  },
  cardBtn:{
    backgroundColor:"#08208C"
  },
  cardShadow:{
    boxShadow: "-1px 11px 27px -15px rgba(0,0,0,0.45)"
  },
  iconSize:{
    fontSize:24,
    padding:"2px 4px",
    cursor:"pointer"
  },
  qtyBtn:{
    borderBottom:"2px solid black",
    padding:"2px 4px",
    fontSize:24
  }
}

const CartProductList = (props)=>{
  const {data,value} = props
  // console.log(data)
  return(
    <div className="col-12 col-sm-12 col-md-12 col-lg-6" >
      <div className="m-2" style={Styles.cardShadow}>

      <div className="bodyCard" style={Styles.cardBody}>
          <CartModal data={data.id} key={data.id} history={props.value.history}/>

          <div style={Styles.cardDisplay}>
              <div>
                  <div>
                    <img src={data.imageUrl} alt={data.id} style={Styles.cardBack}/>
                  </div>
              </div>
              <div> 
                  <div style={{margin:10}}>{data.name}</div>
                  <div style={{margin:10}}>{data.cost}</div>
              <div style={{margin:10}}>By {data.company}</div>
              <div style={{margin:10}}>Qty: <i onClick={()=>value.handleSubQty(data.id)} style={Styles.iconSize} class="far fa-minus-square"></i> <span style={Styles.qtyBtn}>{data.qty} </span><i style={Styles.iconSize} onClick={()=>value.handleAddQty(data.id)} class="far fa-plus-square"></i>
              </div>
              </div>
              <div style={{margin:10}}> {data.select}</div>
          </div>
          <div className="border" style={Styles.cardBottom}>
              <button className="border rounded-pill px-3 py-2 m-2" onClick={()=>{
                value.handleRemoveProduct(data.id)
              
              }}>Remove Cart</button>
              <button data-toggle="modal" data-target="#staticBackdrop4" className="border rounded-pill px-3 py-2 m-2">Order Now</button>
          </div>
      </div>
      </div>
  </div>
  )
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  
  

  render() {
    const {cartArr}= this.props

    if (cartArr.length === 0) {
      return (
        <div className="text-center">
          <h1 style={{}}> Your Cart list is empty</h1>
          <img
            src="https://www.razencustoms.com/includes/img/empty-cart.png"
            alt="cart bag"
          />
        </div>
      );
    }
    return (
      <>
        <div className="container">
          <h1 className="text-center">Your Cart product list</h1>
          <hr/>
          <div className="container">
            <div className="text-left">
                <div className="row">

                {
                  cartArr && cartArr.map(ele=><CartProductList data={ele} value={this.props} key={ele.id}/>)
                } 
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}



const mapStateToProps=state=>({
  cartArr : state.cartArrData
})

const mapDispatchToProps = dispatch=>({

  addToCart:product=>dispatch(addToCart(product)),
  handleRemoveProduct: id => dispatch(removeCart(id)),
  handleAddQty: id => dispatch(addToQty(id)),
  handleSubQty: id => dispatch(subToQty(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Cart)