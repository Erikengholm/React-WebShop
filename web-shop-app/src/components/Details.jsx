import { useLocation } from 'react-router-dom';


const Details = () =>{
    let location = useLocation();

    const prop = location.state.ProductDetails

    return(<div>
        <h3>{prop.title}</h3>
         
         <img height="300px" width="300px" src={prop.image} alt={prop.title} />
         <p>{prop.price} KR</p>
         <button onClick={() =>{
         }}>Köp</button>
        <p>{prop.description}</p>


    </div>)

}

export default Details