import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/splashScreen.css'
import favicon from "../assets/logo/favIcon.png";

export default function SplashScreen() {

    const navigate = useNavigate();

    const [ visible, setVisible ] = useState(false);

    useEffect(() => {

        
        const timer = setTimeout(() => {
            setVisible(true);


            setTimeout(() => {
                navigate('/login', { replace: true });
            }, 1000);


        }, 1000)

        return () => clearTimeout(timer);

    }, [ navigate ])

    return (
        <div className={`splash ${visible ? "show" : "hide" }`}>
            <img className='logoSplash' src={ favicon } alt="Horizon Logo" />
        </div>
    );
}