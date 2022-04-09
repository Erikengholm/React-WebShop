import './App.css';
import WebShopContainer from "./container/WebShopContainer"
import { createContext,useState } from 'react';

const UserContext = createContext({});


function App() {

  const [user, setUser] = useState({
    UserName:"Guest",
    Login:false,
  });

  

  return (   
    <UserContext.Provider value={{user,setUser}}>
    <WebShopContainer/>
    </UserContext.Provider>

  );
}
export {UserContext};
export default App;

