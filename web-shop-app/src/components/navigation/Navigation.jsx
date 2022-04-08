import { NavLink } from 'react-router-dom';


const Navigation = () => {

    return (<nav>

        <ul>
            <li><NavLink to="/">Hem</NavLink></li>
            <li><NavLink to="/Login">Loga in</NavLink></li>
            <li><NavLink to="/Registrate">Skapa konto</NavLink></li>

        </ul>

    </nav>)

}

export default Navigation;