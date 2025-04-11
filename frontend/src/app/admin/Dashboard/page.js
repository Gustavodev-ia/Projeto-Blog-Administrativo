"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/Dashboard.module.css'

export default function Dashboard() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`).then((res) => setPosts(res.data));
  }, []);

  const handleCreatePost = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/posts`, { titulo, conteudo }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Post criado com sucesso!');
    } catch (error) {
      alert('Erro ao criar post');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Dashboard</h2>
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} className={styles.input} />
      <textarea placeholder="Conteúdo" value={conteudo} onChange={(e) => setConteudo(e.target.value)} className={styles.input}></textarea>
      <button onClick={handleCreatePost} className={styles.button}>Criar Post</button>
      <h3>Posts</h3>
      {posts.map((post, index) => (
        <div key={index} className={styles.post}>
          <h4>{post.titulo}</h4>
          <p>{post.conteudo}</p>
        </div>
      ))}
    </div>
  );
}