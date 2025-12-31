import { NavLink } from "react-router-dom"
import "../../styles/Nav.css";



export default function MainOptions ({ link, Icon, text }) {

    return (
        <li className="mainOption">   
                    <NavLink 
                        className={({ isActive }) => isActive ? "mainLink active" : "mainLink"}  
                        to={link}>
                        <Icon className="mainLinkIcon" />
                        {text}
                    </NavLink>
                </li>
    )

}