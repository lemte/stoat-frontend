import { useState } from "react";
// 1. Importando o ícone (Opção C) - Verifique se rodou o 'npm install lucide-react'
import { PawPrint } from 'lucide-react';

export default function Login() {
  // 2. Mantendo a sua Lógica Original (Excelente!)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // Sua função original
    console.log(email, password);
  }

  // 3. O Retorno Novo (O visual que desenhei envolto na sua lógica)
  return (
    <div className="min-h-screen bg-[#FBFBFB] flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-sm bg-white p-10 rounded-[40px] shadow-sm border border-neutral-100 flex flex-col items-center">
        
        {/* Ícone de Pata - A Opção C (Ícone/Logo) que fizemos */}
        <div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center text-white mb-6">
          <PawPrint size={32} strokeWidth={1.5} />
        </div>

        <h1 className="text-3xl font-bold text-neutral-900 tracking-tighter">Stoat</h1>
        <p className="text-neutral-400 text-sm mt-1 mb-10">Systems & Solutions</p>

        {/* Formulário - O espaço onde os inputs (Opção B) vão aparecer */}
        <div className="w-full space-y-4">
           
           {/* Seus Inputs Originais com o Tailwind aplicado neles */}
           <input 
             value={email} // Mantendo seu bind de state
             onChange={(e) => setEmail(e.target.value)} // Mantendo sua lógica de change
             type="email" // Definindo tipo email
             placeholder="Seu e-mail" 
             className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-neutral-50 text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all"
           />

           <input 
             value={password} // Mantendo seu bind de state
             onChange={(e) => setPassword(e.target.value)} // Mantendo sua lógica de change
             type="password" 
             placeholder="Sua senha" 
             className="w-full h-12 px-4 rounded-xl border border-neutral-200 bg-neutral-50 text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 transition-all"
           />

           {/* Seu Botão Original com o Tailwind (Opção A) */}
           <button 
             onClick={handleLogin} // Mantendo sua função original
             className="w-full h-12 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-800 transition-all active:scale-[0.98] mt-2"
           >
             Entrar
           </button>
        </div>

        <p className="text-xs text-neutral-400 mt-10 italic">v1.0.0 - Matheus Lydio (ADS)</p>
      </div>
    </div>
  );
}