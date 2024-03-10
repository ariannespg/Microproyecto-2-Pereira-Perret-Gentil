import React from "react";

const Login = () => {
    return (
        <div>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="Nombre de usuario" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Iniciar sesión</button>
        </form>
        </div>
    );
    };

export default Login;