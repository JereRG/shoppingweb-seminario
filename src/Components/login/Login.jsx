import React, { useState } from 'react';
import "../../styles/login.css";
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Typography } from '@mui/material';


const usuarios = [
    { username: "admin", password: "admin" },
    { username: "1234", password: "1234" },
    { username: "isaias", password: "puto" },
];

export const Login = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        
        const usuario = usuarios.find(user => user.username === username && user.password === password);
        
        if (usuario) {
            onLoginSuccess();
        } else {
            setMessage("Usuario o Contraseña Incorrecta");
        }
    };

    return (
        <>
            <div className="contenedor">
                <Typography variant="h4">Iniciar Sesion</Typography>
                <form onSubmit={handleLogin} className="form">
                    <input
                        className="input"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Usuario"
                    />
                    <input
                        className="input"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Contraseña"
                    />
                    <input className="login-button" type="submit" value="Acceder" />
                </form>
                {message && <Typography variant='h6' className="error-message">{message}</Typography>}
                <div className="social-account-container">
                    <Typography variant="h6" className="title">Iniciar sesión mediante</Typography>
                    <div className="social-accounts">
                        <GoogleIcon sx={{
                            ":hover": {
                                color: "#DF3F32",
                                transition: "200ms",
                            }
                        }} />
                        <XIcon sx={{
                            ":hover": {
                                color: "#DF3F32",
                                transition: "200ms",
                            }
                        }} />
                        <FacebookIcon sx={{
                            ":hover": {
                                color: "#DF3F32",
                                transition: "200ms",
                            }
                        }} />
                    </div>
                </div>
            </div>
        </>
    );
};
