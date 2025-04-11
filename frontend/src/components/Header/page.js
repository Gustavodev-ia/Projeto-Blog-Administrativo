"use client";
import Link from 'next/link';
import styles from '../../app/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/admin/Dashboard" className={styles.navLink}>Cadastrar Post</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog" className={styles.navLink}>Listar Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
