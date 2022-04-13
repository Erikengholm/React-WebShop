import { useLocation } from 'react-router-dom';
import "../styles/Details.css"
import { useContext } from "react";
import { UserContext } from '../App';
import { ShoppingListContext } from '../App';
const Details = () => {
    let location = useLocation();
    const { user } = useContext(UserContext);
    const { ShoppingList } = useContext(ShoppingListContext);

    const prop = location.state.ProductDetails

    const AddToCart = (prop) =>{
        ShoppingList.push(prop)
        console.log(ShoppingList)
    }

    return (<main class="container">

        <div class="left-column">
            <img src={prop.image} alt={prop.title} />
        </div>


        <div class="right-column">

            <div class="product-description">
                <h1>{prop.title}</h1>
                <p>{prop.description}</p>
            </div>

            <div class="product-price">
                <span>{prop.price} KR</span>
                <button className='cart-btn' disabled={!user.Login} onClick={() => {
               AddToCart(prop) }}>Köp</button>  </div>
        </div>
    </main>)

    /*return(<div className='DetailDiv'>
        <h3>{prop.title}</h3>
         
         <img height="300px" width="300px" src={prop.image} alt={prop.title} />
    
        <p>{prop.description}</p>


    </div>)*/

}

export default Details