import React from "react";
import "./commonStyles.css";
import { connect } from "react-redux";
import { addToShoppingCart } from "../../Redux/actionCreators";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data, addToShoppingCart } = this.props;
    return (
      <>
        <div
          className="card"
          style={{ width: "14rem", borderRadius: 6, margin: 8 }}
        >
          <img src={data.imageUrl} className="card-img-top" alt={data.name} />
          <div className="card-body bg-light">
            <h6 className="card-text">{data.name}</h6>
            <h6 className="card-text text-secondary">By {data.company}</h6>
            <h6 className="card-text">price: {data.cost}</h6>
            <button
              onClick={()=>{
                addToShoppingCart(data,()=>{alert("product has been added successfully")},()=>{alert("product has been added successfully")})
                
              }}
              className="card-text"
              style={{
                backgroundColor: "black",
                color: "#E0E0E1",
                border: "none",
                borderRadius: 6,
                padding: "4px 10px"
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  addToShoppingCart: product => dispatch(addToShoppingCart(product))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductCard);
