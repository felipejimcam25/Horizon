import { Routes, Route } from "react-router-dom";
import SplashScreen from '../components/SplashScreen';
import Login from "../pages/auth/Login";
import { Dashboard } from "../pages/dashboard/Dashboard";
import SignUp from "../pages/auth/SignUp";
import ProtectedRoute from "./ProtectedRoute";


export default function AppRouter () {
    return (
        <>
        <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />

            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
                } 
            />

            <Route path="/balance" element={
                <ProtectedRoute>
                    
                </ProtectedRoute>
            } />
        </Routes>
        </>
    )
} 