"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Blog.module.css';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
      .then(response => setPosts(response.data))
      .catch(error => console.error("Erro ao buscar posts", error));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.posts}>
        {posts.map(post => (
          <div key={post.id} className={styles.post}>
            <h2>{post.titulo}</h2>
            <p>{post.conteudo}</p>
          </div>
        ))}
      </div>
    </div>
  );
}