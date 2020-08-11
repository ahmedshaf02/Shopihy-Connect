import React from "react";
import "./commonStyles.css";
import ProductCard from "./ProductCard";
import { connect } from "react-redux";
import ShoppingCart from "./ShoppingCart";

const Styles={
  shoppingBack:{backgroundColor:"#F5FEFF"},
  categoryStyle:{
margin:10,
// display:"flex"
  }
}

 class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        select:"All Product",
        sort: "all",
      order: "="
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    const {productData,shoppingArrData,category,perPage,page} = this.props
    const{select,order,sort} = this.state
    const value = shoppingArrData.length
    console.log(this.props)
    return (
      <>
        <div className="d-lg-flex mt-2" style={Styles.categoryStyle}>
          <div>

        Products By Category:  
          <select  style={{
                      padding: 10,
                      borderRadius: 4,margin:2
                    }} value={select} onChange={(e)=>this.setState({select:e.target.value})}>
             {category.map(ele=><option key={ele}>{ele}</option>)}
          </select>
          </div>
          <div className="mt-2">

                  {/* <h4>Filters :</h4> */}
                            {/* filter by high to low */}
                  <span style={{ margin: 5 }}>Sort by:</span>
  
                  <select
                    name="sort"
                    value={this.state.sort}
                    onChange={this.handleChange}
                    style={{
                      padding: 10,
                      borderRadius: 4
                    }}
                  >
                    <option value="all">all product</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                  </select>
          </div>
          <div className="mt-2">

                  {/* filter by price */}
                  <span style={{ margin: 5 }}>Order by:</span>
  
                  <select
                    name="order"
                    value={this.state.order}
                    onChange={this.handleChange}
                    style={{
                      padding: 10,
                      borderRadius: 4
                    }}
                  >
                    <option value="=">all product</option>
                    <option value=">">Above 1000</option>
                    <option value="<">Below 1000</option>
                  </select>
          </div>

  
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
                .filter(ele => {
                  if (order === ">") {
                    return ele.cost > 1000;
                  } else if (order === "<") {
                    return ele.cost < 1000;
                  } else {
                    return true;
                  }
                })
                .sort((a, b) => {
                  if (sort === "asc") {
                    return a.cost - b.cost;
                  } else if (sort === "desc") {
                    return b.cost - a.cost;
                  } else {
                    return true;
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
