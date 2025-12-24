import "../../styles/Global.css"
import "../../styles/Header.css"

import SlideNav from "./SlideNav";
import Logo from "../../assets/logo/Logo.png";



export default function Header () {
    return (
        <header className="container">
            <SlideNav />
            <div className="logoHeader">
                <img src={Logo} alt="Horizon Logo" />
            </div>
        </header>

    )
}