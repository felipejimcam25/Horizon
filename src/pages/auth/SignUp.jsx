import { useNavigate } from "react-router-dom";
import { storage } from "../../services/storageService"; 
import { useState } from "react";
import Button from "../../components/ui/Button"
import "../../styles/btn.css";
import "../../styles/Login.css"


export default function SignUp () {
    const navigate = useNavigate();
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ repeatPassword, setRepeatPassword ] = useState("");
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");

    function handleSignUp(e) {
        e.preventDefault();

        const STORAGE_KEY = "users";

        const users = storage.get(STORAGE_KEY);

        const userExists = users.some(user => user.username === username);

        if (userExists ) {
            alert('User already exists');
            return;
        }

        if(password !== repeatPassword) {
            alert('Passwords do not match');
            return;
        }
        const amount = 100000;

        const newUser = {
            name,
            email,
            username,
            password, 
            amount
        }
        users.push(newUser)
        storage.set(STORAGE_KEY, users );
        navigate('/login');
    }

    return (
        <section className="signUpContainer">
            <article className="loginHead">
                <h1>Welcome to horizon</h1>
                <span>With Horizon, your goals have no limits.</span>
            </article>
            <article className="loginAccess">
                <form action="#" className="formOrder" onSubmit={handleSignUp}>
                    <div className="formControl">
                        <label htmlFor="name">Enter Name</label>
                        <input 
                        type="text" 
                        id="name" 
                        placeholder="Name" 
                        onInvalid={e => e.target.setCustomValidity("Please enter your name")}
                        onInput={e => e.target.setCustomValidity("")}
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        required 
                        autoComplete="off"/>
                    </div>

                    <div className="formControl">
                        <label htmlFor="email">Enter Email</label>
                        <input 
                        type="email" id="email" 
                        placeholder="Email" 
                        onInvalid={e => e.target.setCustomValidity("Please enter your email")}
                        onInput={e => e.target.setCustomValidity("")}
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required
                        autoComplete="off"
                        />
                    </div>

                    <div className="formControl">
                        <label htmlFor="username">Enter Username</label>
                        <input 
                        type="text" 
                        id="username" 
                        placeholder="Username"
                        onInvalid={e => e.target.setCustomValidity("Please enter your username")}
                        onInput={e => e.target.setCustomValidity("")} 
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
                        onInvalid={e => e.target.setCustomValidity("Please enter your password")}
                        onInput={e => e.target.setCustomValidity("")}
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        required 
                        autoComplete="off"
                        />
                    </div>

                    <div className="formControl">
                        <label htmlFor="passwordR">Confirm Password</label>
                        <input 
                        type="password" 
                        id="passwordR" 
                        placeholder="Password"
                        onInvalid={e => e.target.setCustomValidity("Please confirm your password")}
                        onInput={e => e.target.setCustomValidity("")}
                        value={repeatPassword} 
                        onChange={e => setRepeatPassword(e.target.value)}
                        required 
                        autoComplete="off"
                        />
                    </div>

                    <Button text="Create Account" type="submit"/>
                </form>
            </article>
        </section>

    )
}