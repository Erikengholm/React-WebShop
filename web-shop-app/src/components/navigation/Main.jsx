import {Routes,Route} from "react-router-dom";
import Home from "../Home"
import Login from "../Login"
import Details from "../Details"
import Registrate from "../Registrate"




const Main = () =>{

    //Exact path är samma som == dvs måste vara exakt lika
    //med bara en path som contains dvs att routen innehåller något
    return(<Routes>
    
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Login" element={<Login/>} />
            <Route exact path="/Registrate" element={<Registrate/>} />
            <Route exact path="/Details" element={<Details/>} />


    </Routes>)

}

export default Main