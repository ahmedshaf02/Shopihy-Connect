
import {ADD_PRODUCT_DATA,ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_SUCCESS,ADMIN_LOGIN_FAILURE,ADD_TO_CART,ADD_TO_QTY,SUB_TO_QTY,ADD_TO_SHOPPING_CART,REMOVE_SHOPPING_CART,REMOVE_CART_DATA,ADD_TO_ORDERED,REMOVE_PRODUCT_DATA,MODIFY_PRODUCT_DATA,SUBMIT_MODIFY_DATA,ADD_PRODUCT_CATEGORY}  from "./actionTypes"

export const initState = {
  productData:[
    {name:"Reverse Table Lamp",cost:"$409",company:"Menu",id:"RC-P102",qty:1,desc:"Designed by Alvar Aalto. Wall Light A330S “Golden Bell” is a complement to Alvar Aalto’s popular sculptural pendant light.",select:"Accessories",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/ReverseTableLamp.png?v=1588926891&auto=format&w=1280&"},
    {name:"Harbour Chair ",cost:"$660",company:"Menu",id:"RC-P106",qty:1,desc:"Designed by Norm Architects. Conceived during the design process for Menu’s new creative destination.",select:"Accessories",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/HarbourChair_Black_leather_Natural-Oak-Base_Pack_Angle.jpg?v=1571262805&auto=format&w=1280&"},
    {name:"Traingle Leg Table",cost:"$1299",company:"Round Hay",id:"RC-P108",qty:1,desc:"Designed by GamFratesi. The Beetle dining chair designed by the Danish-Italian design duo Enrico Fratesi and Stine Gam reinterprets the characteristic elements of the beetle",select:"Accessories",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/Triangle_Leg_Table_110_x_H74_oiled_oak_01_1024x1024.jpg?v=1571262775&auto=format&w=430&"},
    {name:"Modular Sofa",cost:"$1750",company:"Gubi",id:"RC-P110",qty:1,desc:"Menu Designed by Norm Architects. Inspired by architecture, Eave Modular Sofa takes its name from",select:"Accessories",imageUrl:"https://cdn.shopify.com/s/files/1/0053/2792/products/EaveCornerModuleRotated.png"},
    {name:"Trave Box",cost:"$25",company:"Artek",id:"RC-P124",desc:"Designed by David Irwin. Trove is a series of minimal cork boxes for organising and storing everyday objects.",select:"Decorative",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/TROVE_CORK_BOX_05_1024x1024.jpg?v=1571262776&auto=format&w=430&"},
    {name:"Reverse Table Lamp",cost:"$409",company:"Hay",id:"RC-P103",desc:"Designed by Alvar Aalto. Wall Light A330S “Golden Bell” is a complement to Alvar Aalto’s popular sculptural pendant light.",select:"Accessories",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/ReverseTableLamp.png?v=1588926891&auto=format&w=1280&"},
    {name:"Tub Jug",cost:"$75",company:"Muuto",id:"RC-P107",desc:"Designed by Atelier BL119. Made in stoneware with glaze, the Tub Jug is an industrial take on the carafe.",select:"Accessories",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/Tub-jug-sand-Muuto-5000x5000-hi-res.jpg?v=1571262839&auto=format&w=1280&"},
    {name:"Walker Lamp",cost:"$270",company:"Menu",id:"RC-P105",desc:"Designed by Søren Rose Studio. The Tribeca series is a mix of lamps, pendants and chandeliers",select:"Accessories",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/1945539_Walker_Black_Brass_SorenRose_01.jpg?v=1571262824&auto=format&w=1280&"},
    {name:"Reverse Table Lamp",cost:"$795",company:"Menu",id:"RC-P109",desc:"Designed by Alvar Aalto. Wall Light A330S “Golden Bell” is a complement to Alvar Aalto’s popular sculptural pendant light.",select:"Accessories",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/ReverseTableLamp.png?v=1588926891&auto=format&w=1280&"},
    {name:"Golden Bell Wall Light",cost:"$389",company:"Artek",id:"RC-P104",desc:"Designed by Alvar Aalto. Wall Light A330S “Golden Bell” is a complement to Alvar Aalto’s popular sculptural pendant light.",select:"Accessories",imageUrl:"https://hausimg.imgix.net/s/files/1/0053/2792/products/Wall_Light_A330S__Golden_Bell__Brass_off_F_JPG.jpg?v=1571262830&auto=format&w=1280&"},
  ],
  modifyData:{},
  modifyCount:2,
  removeCount:3,
  cartArrData:[],
  shoppingArrData:[],
  orderArrData:[],
  category:["All Product","Mens","Women","Kids","Accessories","Decorative"],
  removeStatus:false,
  modifyStatus:false,
  loginData:{}
}

export default (state=initState, {type,payload})=>{

  switch(type){
    case ADD_PRODUCT_DATA:
      return{
        ...state,
        productData:[...state.productData,payload],
        // modifyStatus:false
      }

    case REMOVE_PRODUCT_DATA:
      return{
        ...state,
        productData: state.productData.filter(ele=>ele.id!==payload),
        removeStatus:true
      }
    case REMOVE_CART_DATA:
      return{
        ...state,
        cartArrData: state.cartArrData.filter(ele=>ele.id!==payload),
        shoppingArrData:state.shoppingArrData.filter(ele=>ele.id!==payload),
        removeStatus:true
      }
    case MODIFY_PRODUCT_DATA:
      return{
        ...state,
        modifyData:state.productData.find(ele=>ele.id === payload),
        modifyStatus:true
      }
    case SUBMIT_MODIFY_DATA:
      return{
        ...state,
        productData:state.productData.map(ele=>ele.id === state.modifyData.id?{...payload}:ele),
        modifyStatus:false
      }
    case ADD_TO_CART:
      return{
        ...state,
        cartArrData:[...state.cartArrData, payload]
      }
    case ADD_TO_SHOPPING_CART:
      return{
        ...state,
        shoppingArrData:[...state.shoppingArrData, payload]
      }
    case REMOVE_SHOPPING_CART:
      return{
        ...state,
        shoppingArrData: state.shoppingArrData.filter(ele=>ele.id!==payload),
        cartArrData: state.cartArrData.filter(ele=>ele.id!==payload)
      }
      case ADD_TO_ORDERED:
        return{
          ...state,
          orderArrData:[...state.orderArrData,payload],
          cartArrData: state.cartArrData.filter(ele=>ele.id!==payload.id),
          shoppingArrData: state.shoppingArrData.filter(ele=>ele.id!==payload.id)
      }
    case ADD_PRODUCT_CATEGORY:
      return{
        ...state,
       category:[...state.category,payload]
      }
    case ADD_TO_QTY:
      return{
        ...state,
        shoppingArrData: state.shoppingArrData.map(ele=>ele.id === payload?{...ele,qty:ele.qty+1}:ele),
        cartArrData: state.cartArrData.map(ele=>ele.id === payload?{...ele,qty:ele.qty+1}:ele)
      }
      case SUB_TO_QTY:
        return{
          ...state,
          shoppingArrData: state.shoppingArrData.map(ele=>ele.id === payload?{...ele,qty:ele.qty-1}:ele),
          cartArrData: state.cartArrData.map(ele=>ele.id === payload?{...ele,qty:ele.qty-1}:ele),
      }
      case ADMIN_LOGIN_REQUEST:
        return{
          ...state,
        isLoading:true,
        isError:false
      }
      case ADMIN_LOGIN_SUCCESS:
        return{
          ...state,
          isLoading:false,
          loginData:payload

        }
        
      case ADMIN_LOGIN_FAILURE:
        return{
          ...state,
          isLoading:false,
          isError: true
    }
    default:
      return state
  }

}