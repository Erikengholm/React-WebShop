import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../../App';
import SaveOrder from "../../services/SaveOrder"
import { ShoppingListContext } from '../../App';
import "../../styles/Navigation.css"
import SearchNav from "./SearchNav"

const Navigation = () => {
    const { user } = useContext(UserContext);
    const { ShoppingList,setShoppingList } = useContext(ShoppingListContext);

    const EndShoping = () =>{
        SaveOrder(user.UserID,ShoppingList)
        setShoppingList([])
    }

    return (<nav>

        <ul>
            <li><NavLink to="/">Hem</NavLink></li>
            <li><NavLink to="/Login">Loga in</NavLink></li>
            <li><NavLink to="/Registrate">Skapa konto</NavLink></li>
            <li onClick={() =>{
                EndShoping();
            }}><span>Avsluta Handel</span></li>
            <li><span id="UserNameSpan">{user.UserName}</span></li>
            <li id="SearchBar"><SearchNav/></li>
        </ul>
    </nav>)

}

export default Navigation;