import { NavLink } from "react-router-dom"
import "../styles/Products.css"
import "../styles/Home.css"


const ProductCard = ({ Product }) => {



  return (<div key={Product.id} className="card">
    <NavLink className="RemoveUnderLine ProductNavLink"
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