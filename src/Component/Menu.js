import React from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import CallIcon from '@material-ui/icons/Call';
import "../Css/Menu.css";
const Menu=()=>{
    return(
        <>
    <header>
        <div className="container container-flex">
            <div className="logoContainer">
                <img src={logo} alt="logo" className="logo"/>
            </div>
        
             <nav>
                <NavLink exact to="/"  className="listItem"
                activeClassName="activeItem">Accueil</NavLink>
                <NavLink to="/encyclopedie" className="listItem"
                activeClassName="activeItem">Encyclopédie</NavLink>
                <NavLink to="/parrainage" className="listItem"
                activeClassName="activeItem">Parrainage</NavLink>
                <NavLink to="/contact" className="listItem"
                activeClassName="activeItem">Contact</NavLink>

            </nav>
            <div className="Icons">
                <SearchIcon className="Icon"/>
                <CallIcon className="Icon"/>
            </div>
        </div>
    </header>
        </>
    )
}
export default Menu;