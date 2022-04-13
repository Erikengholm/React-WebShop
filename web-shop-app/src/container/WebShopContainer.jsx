import Header from "../components/navigation/Header"
import Main from "../components/navigation/Main"
import { BrowserRouter } from "react-router-dom"
import ShoppingList from "../components/ShoppingList"

const WebShopContainer = () =>{
    
    return(<BrowserRouter>
     <Header/>
    <Main />
    <ShoppingList/>
    </BrowserRouter>
    )
    
}

export default WebShopContainer