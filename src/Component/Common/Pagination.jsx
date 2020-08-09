
import React from "react";
import "./commonStyles.css";

import { connect } from "react-redux";
import {changePage} from "../../Redux/actionCreators"


 class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    console.log(this.props)
    const{ length,page,perPage,changingPage}  =this.props
    const  totalPages = length/perPage
    const productList = []

    for(let i=page-1;i>=0 && i<=page+4 && i<=totalPages; i++){

      if(i===page-1){ 
       
        if(i!==0){
          productList.push(<button key={i} onClick={()=>changingPage(page-1)} >previous</button>)
          continue

        }
      }
      if(i===page+4){ 
        productList.push(<button key={i} onClick={()=>changingPage(page+1)} >next</button>)
        continue
      }
      if(i!==0){

        productList.push(<button style={{background:`${page===i?"coral":""}`}} key={i} onClick={()=>changingPage(i)} >{i}</button>)
      }
    
    }
    return (
      <>
        {productList}
      </>
    );
  }
}

const mapStateToProps = state=>({
  length:state.app.productData.length,
  productData:state.app.productData,
  page:state.app.page,
  perPage:state.app.perPage
})

const mapDispatchToProps = dispatch=>({
  changingPage: value=> dispatch(changePage(value))
})



export default connect(mapStateToProps,mapDispatchToProps)(Pagination)
