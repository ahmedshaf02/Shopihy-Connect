import React from "react";
import "./commonStyles.css";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import ShoppingCart from "./ShoppingCart";

const Styles={
  shoppingBack:{backgroundColor:"#F5FEFF"},
  categoryStyle:{
margin:10
  }
}

 class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        select:"All Product"
    };
  }
  render() {
    const {productData,shoppingArrData,category,perPage,page} = this.props
    const{select} = this.state
    const value = shoppingArrData.length
    console.log(this.props)
    return (
      <>
        <div style={Styles.categoryStyle}>
        Products By Category:  
          <select style={{margin:2,borderRadius:4}} value={select} onChange={(e)=>this.setState({select:e.target.value})}>
             {category.map(ele=><option key={ele}>{ele}</option>)}
          </select>
        </div>

        <div className="container">
          <div class="row justify-content-center">
          <div class={value?"col-12 col-md-6 col-lg-8":"col-12 col-md-12 col-lg-12"} >
            <div className="row justify-content-center">

        
                {productData.filter(ele=>{
                  if(select==="All Product"){
                    return true
                  }
                  else if(ele.select === select){
                    return true
                  }
                })
                // .filter((ele,i)=>i>=perPage*(page-1)&&i<perPage*page)
                .map(ele => (
                    <ProductCard key={ele.id} data={ele} />
                  ))}
            </div>
          </div>
          {
            value?(  
              <div class="col-12 col-md-6 col-lg-4" style={Styles.shoppingBack}>{
                  
                shoppingArrData && shoppingArrData.map(ele=>
                  <ShoppingCart data={ele}/>
                  )
              }
                 </div>
            ):""
          }
          
        </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state=>({
  productData:state.app.productData,
  shoppingArrData : state.app.shoppingArrData,
  category:state.app.category,
  page:state.app.page,
  perPage:state.app.perPage
})



export default connect(mapStateToProps,null)(Home)
