import React from 'react'
import { Link } from 'wouter'
import styles from './Header.module.css'
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h2>Festival</h2>
        <nav>
          <Link href='/log-in'>Log In</Link>
        </nav>
      </div>
    </header>
  )
}
export default Header
