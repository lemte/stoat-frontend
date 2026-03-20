import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log(email, password);
    }


    return (
        <div>
            <h1>Login Stoat</h1>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}>
            </input>

            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}>
            </input>

            <button onClick={handleLogin}>
                Entrar
            </button>
        </div>
    );
}