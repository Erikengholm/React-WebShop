import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { UserContext } from '../../App';

const Navigation = () => {
    const { user } = useContext(UserContext);

    return (<nav>

        <ul>
            <li><NavLink to="/">Hem</NavLink></li>
            <li><NavLink to="/Login">Loga in</NavLink></li>
            <li><NavLink to="/Registrate">Skapa konto</NavLink></li>
            <li>{user.UserName}</li>
        </ul>
    </nav>)

}

export default Navigation;