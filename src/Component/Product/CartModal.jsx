
import React from "react"
import {connect} from "react-redux"
import {addOrderProduct} from "../../Redux/actionCreators"


const Styles ={
 
  cardShadow:{
    boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.45)",borderRadius:10
  },
  modalInput:{
    margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"
  },
  modalBtn:{
    backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:10
  }

}

class CartModal extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      name:"",
      address:"",
      mobile:"",
      cardNo:"",
      cardExp:"",
      cardCode:"",
    }
  }
  handleChange = e=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    const{name,mobile,address,cardCode,cardExp,cardNo,}= this.state
    const {handleOrderAdd,data,orderData,cartArrData} = this.props
    const value = cartArrData.find(ele=>ele.id === data)
    console.log(data)
    return(
      <div className="modal fade " id="staticBackdrop4" data-backdrop="static" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">your details for order</h5>
        </div>
        <div className="modal-body">
          
          <div>
            <span style={{margin:10,padding:10}}>Name:</span> 
            <input name="name" value={name}  required
             onChange={this.handleChange}
             placeholder="your name" style={Styles.modalInput} />
          </div>

          <div>
            <span style={{margin:10,padding:10}}>Address:</span> 
            <input name="address" value={address}  required
             onChange={this.handleChange} placeholder="Mumbai,MH 400001 India" style={Styles.modalInput}/>
          </div>

          <div>
            <span style={{margin:10,padding:10}}>Mobile:</span> 
            <input name="mobile" value={mobile}  required
             onChange={this.handleChange} placeholder="9876543210" style={Styles.modalInput}/>
          </div>

          <div>
            <span style={{margin:10,padding:10}}>Card No:</span> 
            <input name="cardNo" value={cardNo}  required
             onChange={this.handleChange} placeholder="5485734897223823" style={Styles.modalInput}/>
          </div>

          <div>
            <span style={{margin:10,padding:10}}>Card Exp:</span> 
            <input name="cardExp" value={cardExp}  required
             onChange={this.handleChange} placeholder="20/08/2030" style={Styles.modalInput}/>
          </div>

          <div>
            <span style={{margin:10,padding:10}}>Card Code:</span> 
            <input name="cardCode" value={cardCode}  required
             onChange={this.handleChange} placeholder="676" style={Styles.modalInput}/>
          </div>

        </div>
        <div className="modal-footer text-center">
        <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
            <button onClick={()=>{

              if(name==="" && mobile==="" && address==="" && cardNo==="" && cardCode===""){
                alert("please fill it properly")
                }else{
                  handleOrderAdd(value,()=>{alert("order successfully")})
                  this.props.history.push("/order")
                }
            }} data-dismiss="modal" style={Styles.modalBtn}>Confirm Order</button>
        </div>
      </div>
    </div>
  </div> 
  
    )
  }
}

const mapStatePToProps = state=>({
  orderData: state.app.orderArrData,
  cartArrData:state.app.cartArrData
}) 

const mapDispatchToProps = dispatch=>({

  handleOrderAdd:order=>dispatch(addOrderProduct(order))
})

export default connect(mapStatePToProps,mapDispatchToProps)(CartModal)