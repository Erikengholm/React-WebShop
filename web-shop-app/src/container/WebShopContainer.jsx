import Header from "../components/navigation/Header"
import Main from "../components/navigation/Main"
import { BrowserRouter } from "react-router-dom"
const WebShopContainer = () =>{
    
    return(<BrowserRouter>
     <Header/>
    <Main />
    </BrowserRouter>
    )
    
}

export default WebShopContainer