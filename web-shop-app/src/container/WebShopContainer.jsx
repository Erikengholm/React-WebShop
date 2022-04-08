import Navigation from "../components/navigation/Navigation"
import Main from "../components/navigation/Main"
import { BrowserRouter } from "react-router-dom"
const WebShopContainer = () =>{
    
    return(<BrowserRouter>
     <Navigation/>
    <Main />
    </BrowserRouter>
    )
    
}

export default WebShopContainer