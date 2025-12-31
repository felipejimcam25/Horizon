import { Routes, Route } from "react-router-dom";
import SplashScreen from '../components/SplashScreen';
import Login from "../pages/auth/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";
import SignUp from "../pages/auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import PrivateLayout from "../components/layout/PrivateLayout";


export default function AppRouter () {
    return (
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />

            <Route element={ <PrivateLayout /> }>
                <Route path="/dashboard" element={ <Dashboard/> } />
            </Route>

            <Route path="/balance" element={
                <ProtectedRoute>
                    
                </ProtectedRoute>
            } />
        </Routes>
    )
} 