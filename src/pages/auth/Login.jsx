import { useNavigate, Link } from "react-router-dom"
import Button from "../../components/ui/Button"
import "../../styles/Login.css"
import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import { authLogin } from "../../services/authService";


export default function Login () {
    const navigate = useNavigate();
    const [ username, setUsername ] = useState();
    const [ password, setPasword ] = useState();
    const { login } = useAuth();

    function handleLogin (e) {
        e.preventDefault();
        
        try {
            const user = authLogin(username, password);
            login(user);
            
            navigate('/dashboard');
        } catch (err) {
            alert(err.message);
        }


    }
    return (
        <section className="loginContent">
            <article className="loginHead">
                <h1>Welcome to horizon</h1>
                <span>With Horizon, your goals have no limits.</span>
            </article>
            <article className="loginAccess">
                <form action="#" className="formOrder" onSubmit={handleLogin}>
                    <div className="formControl">
                        <label htmlFor="username">Enter Username</label>
                        <input 
                        type="text" 
                        id="username" 
                        placeholder="Username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required 
                        autoComplete="off"
                        />
                    </div>
                    <div className="formControl">
                        <label htmlFor="password">Enter Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPasword(e.target.value)}
                        required
                        autoComplete="off"/>
                        <div className="passwordReset">
                            <span className="text">Forgot Password?</span>
                        </div>
                    </div>
                    <Button text="Login" type="submit"/>
                </form>
                <div className="signUp">
                    <span className="text">Don't you have an account? <Link className="signUpLink" to="/signUp">Sign up</Link></span>
                </div>
            </article>
        </section>
    )
}