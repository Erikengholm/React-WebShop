import { NavLink } from "react-router-dom"
import "../styles/Products.css"
import { useContext } from "react";
import { ShoppingListContext } from '../App';

const ProductCard = ({Product}) =>{
  const { ShoppingList } = useContext(ShoppingListContext);

    const AddToShopingCart = (prop) =>{
      ShoppingList.push(prop)
      console.log(ShoppingList)
    }

    return(<div key={Product.id} className="ProductCard">
         <NavLink className="RemoveUnderLine"
  to="Details"
  state={{ ProductDetails: Product }}
>
            <p>{Product.title}</p>
         
            <img height="150px" width="150px" src={Product.image} alt={Product.title} />
            <p>{Product.price} KR</p>
            </NavLink>
    </div>)

}

export default ProductCard