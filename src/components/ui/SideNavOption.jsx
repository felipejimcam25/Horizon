import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Nav.css";

export default function SideNavOption ({ link, icon, text }) {


    return (
        <>

        <li className="option">
            <NavLink 
            className={({ isActive }) => isActive ? "navLink active" : "navLink"}  
            to={link}>
            <FontAwesomeIcon 
            icon={icon} 
            className="linkIcon" 
            /> 
            {text}
            </NavLink>
        </li>
        </>
    )

}