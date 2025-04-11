"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Login.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, { email, senha });
      console.log(res.data)
      localStorage.setItem('token', res.data);
      
      toast.success("Login realizado com sucesso!")
      router.push('/admin/Dashboard');
    } catch (error) {
      alert('Erro ao fazer login',error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.input} />
        <button onClick={handleLogin} className={styles.button}>Entrar</button>
      </div>
    </div>
  );
}