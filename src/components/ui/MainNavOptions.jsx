import { NavLink, useLocation } from "react-router-dom"
import "../../styles/Nav.css";



export default function MainOptions ({ link, Icon, text }) {

const location = useLocation();

const isDashboard = link === "/dashboard" && location.pathname.startsWith("/dashboard");

    return (
        <li className="mainOption">   
            <NavLink 
                className={({ isActive }) => isActive || isDashboard ? "mainLink active" : "mainLink"}  
                to={link}>
                <Icon className="mainLinkIcon" />
                {text}
            </NavLink>
        </li>
    )

}