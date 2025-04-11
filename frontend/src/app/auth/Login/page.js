"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      router.push('/admin/dashboard');
    } catch (error) {
      alert('Erro ao fazer login');
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