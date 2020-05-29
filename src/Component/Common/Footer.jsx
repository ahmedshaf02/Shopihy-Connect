
import React from "react";
import "./commonStyles.css"


export default class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  render(){
    return(
      <>
        <br/>
        <div className="" style={{backgroundColor:"#F8F9FF", textAlign:"center",paddingBottom:20}}>
          <hr/>


          <div>
              <span className="mr-2"> Connect here:</span>

              <a href="https://www.facebook.com/" target="_blank"> 
              <i className="fab fa-facebook-square" style={{fontSize:40, color:"black",padding:6}}  />
              </a>

              <a href="https://www.twitter.com/" target="_blank"> 
              <i className="fab fa-twitter-square" style={{fontSize:40, color:"black",padding:6}}  />
              </a>

              <a href="https://www.instagram.com/" target="_blank"> 
              <i className="fab fa-instagram" style={{fontSize:40, color:"black",padding:6}}  />
              </a>

              <a href="https://www.linkedin.com/" target="_blank"> 
              <i className="fab fa-linkedin" style={{fontSize:40, color:"black",padding:6}}  />
              </a>

  
          </div>
        </div>
      </>
    )
  }
}
 