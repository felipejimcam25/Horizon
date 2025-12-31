import { useAuth } from "../../context/useAuth";
import MainNav from "./MainNav";
import Header from "../layout/Header"
import { Navigate, Outlet } from "react-router-dom";

import "../../styles/PrivateLayout.css"

export default function PrivateLayout () {
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return (
        <div className="privateLayout">
            <Header />
            <MainNav />

            <main>

            <Outlet/>
            </main>
            
        
        </div>
    )
}