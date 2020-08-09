
import React from "react";
import {connect} from "react-redux"
import {addProduct, removeProductData, modifyProductData,addCategory,submitModifyData} from "../../Redux/actionCreators"
import "./styles.css"
import AddProductModal from "./AddProductModal"

const Styles ={
  productTill:{
    fontWeight:"bold", color:"#3176FF"
  },
  totalCount:{
    fontWeight:"bold",color:"#FA058B"
  },
  modifyCount:{
    fontWeight:"bold",color:"#7405FA"
  },
  removeCount:{
    fontWeight:"bold",color:"#FA058B"
  },
  cardShadow:{
    boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.45)",borderRadius:10
  },
  addProductBtn:{
    backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:4
  },
  removeModifyBtn:{
    backgroundColor:"white",fontSize:16,color:"black",border:"0.8px solid black",borderRadius:5,padding:"6px 14px",margin:4
  },
  animateDiv:{
    height:30,width:30,borderRadius:15,backgroundColor:"#FA058B"
  },
  cardHeader:{
    fontWeight:"bold",fontSize:24,color:"black"
  },
  modalInput:{
    margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"
  },
  modalBtn:{
    backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:10
  }

}

 class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      name:"",
      cost:"",
      id:"",
      desc:"",
      imageUrl:"",
      company:"",
      select:"",
      removeId:"",
      removeName:"",
      modifyName:"",
      modifyId:"",
      categoryAdd:"",
      qty:1
     

    };
  }
  handleChange = e=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

render() {
  // console.log(this.props)
  const {name,cost,id,desc,imageUrl,company,select,qty,removeId,removeName,modifyId,modifyName, categoryAdd} = this.state
  
  const product={name,cost,id,desc,imageUrl,company,select,qty}
    const {handleAddProduct,modifyCount,removeCount,productData,handleSubmitModify, handleModifyProduct,handleRemoveProduct,handleAddCategory,category,modifyData} = this.props
    return (
      <>

      {/* { this.props.removeStatus?(
          alert("successfully removed product")
        
      ):""
      } */}
      {/* {this.props.count} */}
        
        <div className="container">
          <div className="row ml-3 ">
            <div>

            <h1>Admin Dashboard</h1>
            <h6 style={Styles.productTill}><i style={{fontSize:24}} class="far fa-chart-bar"></i> Product added till now :{productData.length+removeCount} </h6>
            <h6 style={Styles.totalCount}><i style={{fontSize:24}}  class="far fa-list-alt"></i> Total Count :{productData.length}</h6>
            <h6 style={Styles.modifyCount}><i style={{fontSize:24}} class="fas fa-undo-alt"></i> Modify Count:{modifyCount}</h6>
            <h6 style={Styles.removeCount}><i style={{fontSize:24}} class="far fa-trash-alt"></i> Removed Count:{removeCount}</h6>
            </div>
          </div>
        </div>
        <div className="container">
          
          <div className="row text-center">
            <div class="col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6">

              <div style={Styles.cardShadow}>

                  <div class="border rounded-top text-center p-2" style={Styles.cardHeader}>
                      product management panel
                  </div>
                  <div className="border" style={{height:200}}>
                      <button data-toggle="modal" data-target="#staticBackdrop" style={Styles.addProductBtn}>Add Product</button>
                      <button data-toggle="modal" data-target="#staticBackdrop1" style={Styles.removeModifyBtn}>Remove Product</button>
                      <button data-toggle="modal" data-target="#staticBackdrop2" style={Styles.removeModifyBtn}>Modify Product</button>
                      <button data-toggle="modal" data-target="#staticBackdrop3" style={Styles.removeModifyBtn}>Add Category</button>
                      <br/>
                      <div style={Styles.animateDiv} className="animate"></div>
                  </div>
                  <div class="text-center border rounded-bottom" style={{height:40}}>
                      <img
                          width="38"
                          className="img-fluid"
                          src="https://st2.depositphotos.com/5142301/11420/v/950/depositphotos_114200716-stock-illustration-letter-r-logo-in-play.jpg"
                          alt="logo react-connect"
                          />
                          React-Connect Admin
                  </div>
              </div>
            </div>
          </div>
        </div>

        {
          // modify product 
          this.props.modifyStatus?(

          <div className="container mt-5">
              <div className="row">

                <div class="col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6" style={Styles.cardShadow}>

                  <div class="modal-header text-center">
                    <h5 class="modal-title" id="staticBackdropLabel">Admin Modify your product</h5>
                  </div>
                    <div class="modal-body text-center">
                    <div>
                      <span className="text-left">Name:</span>
                      <input name="name" defaultValue={modifyData.name} 
                      onChange={(e)=>this.setState({name:e.target.value})} required
                        placeholder="Tela Carafe" style={Styles.modalInput} />
                    </div>
            
                    <div>
                      <span>UUID:</span>
                      <input name="id" defaultValue={modifyData.id}  required
                      onChange={(e)=>this.setState({id:e.target.value})}  placeholder="RC-P100" style={Styles.modalInput} />
                    </div>
            
                    <div>
                      <span>Cost:</span> 
                      <input name="cost" defaultValue={modifyData.cost} 
                      onChange={(e)=>this.setState({cost:e.target.value})} required
                        placeholder="$49" style={Styles.modalInput} />
                    </div>
            
                    <div>
                      <span>Decription:</span> 
                      <input name="desc" defaultValue={modifyData.desc}  required
                      onChange={(e)=>this.setState({desc:e.target.value})} placeholder=" A progressive glass collection evolved" style={Styles.modalInput} />
                    </div>
            
                    <div>
                      <span >Company:</span>
                      <input name="company" defaultValue={modifyData.company}  required
                      onChange={(e)=>this.setState({company:e.target.value})} placeholder="Hay" style={Styles.modalInput} />
                    </div>
            
                    <div>
                      <span >Image url:</span> 
                      <input name="imageUrl" defaultValue={modifyData.imageUrl}  required
                     onChange={(e)=>this.setState({imageUrl:e.target.value})} placeholder="https://hausimg.imgix.net" style={Styles.modalInput} />
                    </div>
                    <div>
                      <span >Category:</span>
                        <select name="select" defaultValue={modifyData.select} onChange={(e)=>this.setState({select:e.target.value})}style={Styles.modalInput}>
                          {
                            category.map(ele=><option value={ele}>{ele}</option>)
                          }
                        </select>
                      </div>
            
                  <div class="modal-footer text-center">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button data-dismiss="modal"  onClick={()=>{
                        
                        if(name === "" && id ===""){
                         alert("please fill it properly")
                         }else{
                           handleSubmitModify(product,()=>{alert("update successfully")})
                         }
                      }}   style={Styles.modalBtn}>Update Product</button>
                  </div>
                  </div>
                </div>
              </div>
          </div>
          ):""
        }

 {/* modal code for add product  */}
        <AddProductModal  data={this.state} productData={this.props} handleChange={this.handleChange} />


{/* modal code for remove product */}
 <div class="modal fade " id="staticBackdrop1" data-backdrop="static" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Admin remove your product</h5>
      </div>
      <div class="modal-body">
        
        <div>
          <span style={{margin:10,padding:10}}>Name:</span> 
          <input name="removeName" value={removeName}  required
           onChange={this.handleChange}
           placeholder="Tela Carafe" style={Styles.modalInput} />
        </div>
        <div>
          <span style={{margin:10,padding:10}}>UUID:</span> 
          <input name="removeId" value={removeId}  required
           onChange={this.handleChange} placeholder="RC-P100" style={Styles.modalInput}/>
        </div>
      </div>
      <div class="modal-footer text-center">
      <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
          <button onClick={()=>handleRemoveProduct(removeId)} data-dismiss="modal" style={Styles.modalBtn}>Remove Product</button>
      </div>
    </div>
  </div>
</div> 

{/* modal code for modify product */}

<div class="modal fade " id="staticBackdrop2" data-backdrop="static"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Admin modify your product</h5>
      </div>
      <div class="modal-body">
        
        <div>
          <span style={{margin:10,padding:10}}>Name:</span> 
          <input name="modifyName" value={modifyName}  required
           onChange={this.handleChange} placeholder="Tela Carafe" style={Styles.modalInput} />
        </div>

        <div>
          <span style={{margin:10,padding:10}}>UUID:</span> 
          <input name="modifyId" value={modifyId}  required
           onChange={this.handleChange} placeholder="RC-P100" style={Styles.modalInput}/>
        </div>
      </div>
      <div class="modal-footer text-center">
      <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
          <button onClick={()=>{
             if(modifyName === "" && modifyId ===""){
              alert("please fill it properly")
              }else{
                handleModifyProduct(modifyId,()=>{alert("modify successfully")})
              }
          }} data-dismiss="modal" style={Styles.modalBtn}>Modify Product</button>
      </div>
    </div>
  </div>
</div> 

{/* modal code for add category*/}

<div class="modal fade " id="staticBackdrop3" data-backdrop="static"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Admin add product catogory</h5>
      </div>
      <div class="modal-body">
        <div>
          <span style={{margin:10,padding:10}}>Category:</span> 
          <input name="categoryAdd" value={categoryAdd}  required
           onChange={this.handleChange} placeholder="Wallet" style={Styles.modalInput}/>
        </div>
      </div>
      <div class="modal-footer text-center">
      <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
          <button onClick={()=>{
            if(categoryAdd===""){
              alert("please fill it properly")
              }else{
                handleAddCategory(categoryAdd,()=>{alert("update successfully")})
              }
          }} data-dismiss="modal" style={Styles.modalBtn}>Add Category</button>
      </div>
    </div>
  </div>
</div> 

      </>
    );
  }
}

  const mapStateToProps= state =>({
    modifyCount:state.app.modifyCount,
    removeCount:state.app.removeCount,
    productData:state.app.productData,
    removeData:state.app.removeData,
    modifyData:state.app.modifyData,
    category:state.app.category,
    removeStatus:state.app.removeStatus,
    modifyStatus:state.app.modifyStatus

  })
  const mapDispatchToProps = dispatch=>({
     handleAddProduct: product => dispatch(addProduct(product)),
     handleRemoveProduct: id => dispatch(removeProductData(id)),
     handleModifyProduct: id => dispatch(modifyProductData(id)),
     handleAddCategory: category => dispatch(addCategory(category)),
     handleSubmitModify: product =>{
      dispatch(submitModifyData(product))
     } 
  })

  export default connect(mapStateToProps,mapDispatchToProps)(Product)
