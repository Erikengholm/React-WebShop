import {useState,useEffect} from "react"
import FetchAllProductData from "../services/FetchAllProductData"
import ProductCard from "./ProductCard";

const Home = () =>{

    const [ProductList, setProductList] = useState([])

    useEffect(() => {
      
        FetchAllProductData().then(res =>{
            setProductList(res);
        })
     
    }, [])

    let list = ProductList.map(product => {

        return (<ProductCard Product={product} />)
    });
    
    if(ProductList.length !== 0){
        return (<>
            <div className="ProductContainer">
                {list}
            </div>
        </>)
    }
    else{
        return (<>
            <div className="ProductContainer">
                <h1>Väntar på att datan ska hämtas</h1>
            </div>
        </>)
    }

};

export default Home