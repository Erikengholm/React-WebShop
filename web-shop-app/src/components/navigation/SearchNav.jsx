import {useRef,useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/Search.css"
const SearchNav = () =>  {

    const [InputValue, SetInputValue] = useState("");

    const searchVal = useRef();
    return (<div className='SearchDiv'>

        <input type="text" ref={searchVal} onChange={() =>{
            SetInputValue(searchVal.current.value)
        }}></input>
        <NavLink className="RemoveUnderLine"
  to="Search"
  state={{ searchVal: InputValue }}
>    
        &#x1F50D;</NavLink>

    </div>)

}

export default SearchNav;