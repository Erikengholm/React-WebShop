import './App.css';
import WebShopContainer from "./container/WebShopContainer"
import { createContext,useState } from 'react';

const UserContext = createContext({});

const ShoppingListContext = createContext({});

function App() {

  const [user, setUser] = useState({
    
    UserName:"Guest",
    Login:false,
  });
  const [ShoppingList, setShoppingList] = useState([]);

  

  return (   
    <UserContext.Provider value={{user,setUser}}>
      <ShoppingListContext.Provider value={{ShoppingList,setShoppingList}}>
        <WebShopContainer/>
      </ShoppingListContext.Provider>
    </UserContext.Provider>

  );
}
export {UserContext,ShoppingListContext};
export default App;

