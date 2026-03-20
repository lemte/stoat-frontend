// src/pages/Login.tsx
import { useState } from "react";
import { PawPrint } from 'lucide-react';
import { Input } from "../components/Input"; // Importando seu novo componente!

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    console.log("Login tentado com:", { email, password });
  }

  return (
    <div className="min-h-screen bg-[#FBFBFB] flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-sm bg-white p-10 rounded-[40px] shadow-sm border border-neutral-100 flex flex-col items-center">
        
        <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-white mb-6">
          <PawPrint size={32} strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl font-bold text-neutral-900 tracking-tighter">Stoat</h1>
        <p className="text-neutral-400 text-sm mt-1 mb-10">Systems & Solutions</p>

        <div className="w-full space-y-6">
           <Input 
             label="E-mail"
             type="email"
             placeholder="digite seu e-mail"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />

           <Input 
             label="Senha"
             type="password" 
             placeholder="••••••••"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />

           <button 
             onClick={handleLogin}
             className="w-full h-12 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-800 transition-all active:scale-[0.98] shadow-lg shadow-neutral-200"
           >
             Acessar Plataforma
           </button>
        </div>

        <p className="text-[10px] text-neutral-300 mt-12 uppercase tracking-[0.2em]">
          Desenvolvido por Matheus Lydio
        </p>
      </div>
    </div>
  );
}