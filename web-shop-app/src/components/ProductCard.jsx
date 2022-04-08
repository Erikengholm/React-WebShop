import { NavLink } from "react-router-dom"

const ProductCard = ({Product}) =>{
    return(<div>
         <NavLink className="RemoveUnderLine"
  to="Details"
  state={{ ProductDetails: Product }}
>
            <p>{Product.title}</p>
         
            <img src={Product.image} alt={Product.title} />
            <p>{Product.description}</p>
            <p>{Product.price}</p>
            </NavLink>
    </div>)

}

export default ProductCard