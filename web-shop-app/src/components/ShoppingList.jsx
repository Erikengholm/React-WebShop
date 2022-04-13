import { ShoppingListContext } from '../App';
import SimpleShoppingList from "../services/SimpleShoppingList";
import { useContext } from "react";
import "../styles/ShoppingList.css"

const ShoppingList = () => {

    const { ShoppingList } = useContext(ShoppingListContext);


    const List = SimpleShoppingList(ShoppingList, true).map((res) => {
        console.log(res)
        
        return (<tr>
            <td>{res.Titel}</td>
            <td>{res.pricePerItem}</td>
            <td>{res.TotalPrice}</td>
            <td>{res.quantity}</td>

        </tr>)
    });

    return (
    <div>
        <table id="customers">
            <tr>
                <th>Namn</th>
                <th>Produkts Pris</th>
                <th>Totala Pris</th>
                <th>Kvantitet</th>
            </tr>
            {List}
        </table>
    </div>)
}
export default ShoppingList