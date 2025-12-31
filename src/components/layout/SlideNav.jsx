import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNavOption from "../ui/SideNavOption";
import { faUser, faBullseye, faBell, faXmark, faGear, faArrowRightFromBracket, faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Nav.css";


export default function SlideNav () {

    
    const [ isOpen, setIsOpen ] = useState(false);
    
    useEffect(() => {
        if(isOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
    }, [ isOpen ])


    return (
        <nav className="slide-nav">
            <FontAwesomeIcon 
            icon={faBars} 
            role="Button"
            title="Navigation Menu"
            className="openNav"
            onClick={() => setIsOpen(!isOpen)}
            />
            <ul className={`navList ${isOpen ? "active" : ""}`}>


                <div className="menuControl">
                    <div className="close">
                    <FontAwesomeIcon 
                    icon={faXmark} 
                    className="closeNav"
                    role="Button"
                    onClick={() => setIsOpen(!isOpen)}
                    />
                    </div>

                    <li className="menuText">Main Menu</li>
                    
                        <SideNavOption 
                        link={"/profile"}
                        icon={faUser}
                        text={"Profile"}
                        />
                        <SideNavOption 
                        link={"/goals"}
                        icon={faBullseye}
                        text={"Goals"}
                        />
                        <SideNavOption 
                        link={"/notifications"}
                        icon={faBell}
                        text={"Notifications"}
                        />
                </div>

                <div className="menuControl dropdown">
                    <li className="menuText">Account Management <FontAwesomeIcon icon={faAngleDown} /></li>
                    <SideNavOption 
                        link={"/balance"}
                        icon={""}
                        text={"Balance"}
                    />
                    <SideNavOption 
                        link={"/spend"}
                        icon={""}
                        text={"Spend"}
                    />
                    <SideNavOption 
                        link={"/saving"}
                        icon={""}
                        text={"Saving"}
                    />
                </div>

                <div className="menuControl">
                    <SideNavOption 
                        link={"/settings"}
                        icon={faGear}
                        text={"Settings"}
                    />
                    <SideNavOption 
                        link={"/logout"}
                        icon={faArrowRightFromBracket}
                        text={"Logout"}
                    />
                </div>

            </ul>
        </nav>
    )
} 