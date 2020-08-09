
import React from "react"
import {connect} from "react-redux"
import {addProduct, removeProductData, modifyProductData,addCategory,submitModifyData} from "../../Redux/actionCreators"

const Styles ={
 
  cardShadow:{
    boxShadow:"0px 4px 10px 0px rgba(0,0,0,0.45)",borderRadius:10
  },
  addProductBtn:{
    backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:4
  },
  modalInput:{
    margin:10,border:"none",borderBottom:"0.6px solid #C9C0D3",outline:"none"
  },
  modalBtn:{
    backgroundColor:"black",fontSize:16,color:"#E0E0E1",border:"none",borderRadius:5,padding:"6px 16px",margin:10
  }

}


 class AddProductModal extends React.Component{
constructor(props){
  super(props);
  this.state={

  }
}

handleChange=e=>{
this.props.handleChange(e)
}

render(){
  const {name,cost,id,desc,imageUrl,company,select,qty} = this.props.data
  const {handleAddProduct,category} = this.props.productData
  const product={name,cost,id,desc,imageUrl,company,select,qty}
  return(
    <>
      <div>


        <div class="modal fade " id="staticBackdrop" data-backdrop="static"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Admin Add your product</h5>
              </div>
              <div class="modal-body text-center">
                <div>
                  <span className="text-left">Name:</span>
                  <input name="name" value={name} 
                  onChange={this.handleChange} required
                    placeholder="Tela Carafe" style={Styles.modalInput} />
                </div>

                <div>
                  <span>UUID:</span>
                  <input name="id" value={id}  required
                  onChange={this.handleChange}  placeholder="RC-P100" style={Styles.modalInput} />
                </div>

                <div>
                  <span>Cost:</span> 
                  <input name="cost" value={cost} 
                  onChange={this.handleChange} required
                    placeholder="$49" style={Styles.modalInput} />
                </div>

                <div>
                  <span>Decription:</span> 
                  <input name="desc" value={desc}  required
                  onChange={this.handleChange} placeholder=" A progressive glass collection evolved" style={Styles.modalInput} />
                </div>

                <div>
                  <span >Company:</span>
                  <input name="company" value={company}  required
                  onChange={this.handleChange} placeholder="Hay" style={Styles.modalInput} />
                </div>

                <div>
                  <span >Image url:</span> 
                  <input name="imageUrl" value={imageUrl}  required
                  onChange={this.handleChange} placeholder="https://hausimg.imgix.net" style={Styles.modalInput} />
                </div>
                <div>
                  <span >Category:</span>
                    <select name="select" value={select} onChange={this.handleChange} style={Styles.modalInput}>
                      {
                        category.map(ele=><option value={ele}>{ele}</option>)
                      }
                    </select>
                  </div>

              <div class="modal-footer text-center">
              <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
                  <button data-dismiss="modal"  
                  onClick={()=>{
                    if(name === "" && id ===""){
                        alert("please fill it properly")
                    }else{
                      handleAddProduct(product,()=>{alert("added successfully")})
                    }
                  }}   style={Styles.modalBtn}>Add Product</button>
              </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}
}
const mapDispatchToProps = dispatch=>({
  handleAddProduct: product => dispatch(addProduct(product)),
  handleRemoveProduct: id => dispatch(removeProductData(id)),
  handleModifyProduct: id => dispatch(modifyProductData(id)),
  handleAddCategory: category => dispatch(addCategory(category)),
  handleSubmitModify: product =>{
   dispatch(submitModifyData(product))
  } 
})

export default connect(null,mapDispatchToProps)(AddProductModal)