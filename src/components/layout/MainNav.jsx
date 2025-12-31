/*
TO DO: 
-> INSERT OPTIONS COMPONENT, WITH AN HOVER AND ACTIVE MODE
-> ASSIGN LINKED LOCATIONS TO DISPLAY THE SCREEN WHEN THE USER CLICK ON THE OPTION 
-> FIXED THIS MENU ON BOTTOM OF THE SCREEN
*/


import MainOptions from "../ui/MainNavOptions"
import DashboardIcon from "../../assets/Icons/DashboardIcon"
import TransactionIcon from "../../assets/Icons/TransactionIcon"
import ChatIcon from "../../assets/Icons/ChatIcon"
import CardIcon from "../../assets/Icons/CardIcon"

export default function MainNav() {


    return (
        <nav className="mainNav">
            <ul className="mainList">
                <MainOptions
                    link={"/dashboard"}
                    Icon={DashboardIcon}
                    text={"Dashboard"}
                />
                <MainOptions
                    link={"/chat"}
                    Icon={ChatIcon}
                    text={"Chat AI"}
                />
                <MainOptions
                    link={"/transaction"}
                    Icon={TransactionIcon}
                    text={"Transaction"}
                />
                <MainOptions
                    link={"/card"}
                    Icon={CardIcon}
                    text={"Cards"}
                />
            </ul>
        </nav>
    )
}