import { NavLink } from "react-router-dom"
import "../styles/Products.css"
import {CheckIfCookieExist} from "../services/CookieModifier"

const ProductCard = ({Product}) =>{

    const AddToShopingCart = (prop) =>{
      CheckIfCookieExist(prop)
    }

    return(<div key={Product.id} className="ProductCard">
         <NavLink className="RemoveUnderLine"
  to="Details"
  state={{ ProductDetails: Product }}
>
            <p>{Product.title}</p>
         
            <img height="150px" width="150px" src={Product.image} alt={Product.title} />
            <p>{Product.price}</p>
            </NavLink>
            <button onClick={() =>{
              AddToShopingCart(Product);
            }}>Köp</button>
    </div>)

}

export default ProductCard