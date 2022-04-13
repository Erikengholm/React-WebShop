import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../../App';
import SaveOrder from "../../services/SaveOrder"
import { ShoppingListContext } from '../../App';
import "../../styles/Navigation.css"
import SearchNav from "./SearchNav"
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const { user } = useContext(UserContext);
    const { ShoppingList,setShoppingList } = useContext(ShoppingListContext);
    const navigate = useNavigate();

    const EndShoping = () =>{
        
        if(ShoppingList.length ===0){
            alert("Du har inte köpt något >:(")
        }
        else{
            alert("Tack och välkommen tillbaka :)")
            SaveOrder(user.UserID,ShoppingList)
            setShoppingList([])
            navigate('/')
        }
        

    }

    return (<nav>

        <ul>
            <li><NavLink to="/">Hem</NavLink></li>
            {!user.Login &&
                <><li><NavLink to="/Login">Loga in</NavLink></li><li><NavLink to="/Registrate">Skapa konto</NavLink></li></>
            }
                        {user.Login &&

            <li id="StopShoping" onClick={() =>{
                EndShoping();
            }}><span>Avsluta Handel</span></li>
            }
            <li><span id="UserNameSpan">{user.UserName}</span></li>
            <li id="SearchBar"><SearchNav/></li>
        </ul>
    </nav>)

}

export default Navigation;