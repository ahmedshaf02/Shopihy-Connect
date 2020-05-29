
import React from "react";
import "./commonStyles.css";
import {connect} from "react-redux"
import {removeShoppingCart,addToCart,addToQty,subToQty} from "../../Redux/actionCreators"

const Styles={
shoppingImg:{
  width:100,height:100,border:"1px solid black",borderRadius:"50%"
},
shoppingText:{display:"flex",justifyContent:"center"},
shppingBack:{backgroundColor:"#F5FEFF"},
shoppingShadow:{boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.2)"},
shoppingBtn:{backgroundColor:"#F7F7F7",fontSize:14},
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

 class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // removeQty:this.props.data.qty
    }
  }

  
  
  render() {
    const {data, handleRemove,handleAddToCart, handleAddQty,handleSubQty} = this.props
    console.log(this.props)

        // if(this.state.removeQty === "0"){
        //   handleRemove(data.id)
        // }
    return (
      <>
          <div style={Styles.shoppingShadow} className="mb-4">
              
            <div class=" header  border rounded text-center p-2 bg-white">
                Your Shopping Cart <span><i class="fas fa-shopping-cart"></i></span>
            </div>
            <div class="bodyCard  border bg-white p-2">
                <div style={{display:"flex"}}>
                    <img src={data.imageUrl} style={Styles.shoppingImg} alt={data.id}/>
                    
                    <div style={Styles.shoppingText} className="p-2">
                        <div className="p-2">{data.name}</div>
                        <div className="p-2">{data.cost}</div>
                    </div>
                </div>
                <div style={Styles.shoppingText}>
                    <div>Qty: <i onClick={()=>handleSubQty(data.id)} style={Styles.iconSize} class="far fa-minus-square"></i> <span style={Styles.qtyBtn}> {data.qty} </span> <i onClick={()=>handleAddQty(data.id)} style={Styles.iconSize} class="far fa-plus-square"></i></div>
                </div>
            </div>
                <div class=" header  border rounded text-right bg-white">
                    <button onClick={()=>handleAddToCart(data)}  className="border rounded-pill m-2" style={Styles.shoppingBtn}>Confirm Order</button>
                    <button onClick={()=>handleRemove(data.id)} className="border rounded-pill m-2" style={Styles.shoppingBtn}>Remove</button>
                </div>
          </div>
        
      </>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  handleRemove: id => dispatch(removeShoppingCart(id)),
  handleAddToCart: product => dispatch(addToCart(product)),
  handleAddQty: id => dispatch(addToQty(id)),
  handleSubQty: id => dispatch(subToQty(id))
});

export default connect(
  null,
  mapDispatchToProps
)(ShoppingCart);
