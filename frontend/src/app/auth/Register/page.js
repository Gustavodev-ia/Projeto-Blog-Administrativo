"use client";
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, { nome, email, senha });
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar');
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
}