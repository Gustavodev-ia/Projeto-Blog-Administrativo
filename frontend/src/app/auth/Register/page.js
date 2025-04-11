"use client";
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styles from '../../styles/Register.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter()
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`, { nome, email, senha });
      toast.success('Cadastro realizado com sucesso!')
      router.push('/auth/Login');
    } catch (error) {
      toast.error('Erro ao cadastrar');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Cadastro</h2>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} className={styles.input} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} className={styles.input} />
        <button onClick={handleRegister} className={styles.button}>Cadastrar</button>
      </div>
    </div>
  );
}
