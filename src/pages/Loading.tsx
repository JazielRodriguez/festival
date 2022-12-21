import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { SpinnerCircular } from 'spinners-react'
import styles from '../styles/LoadingPage.module.css'
const LoadingPage: React.FC = () => {
  return (
    <div className={styles.content}>
      <div>
        <SpinnerCircular color='#000' size={100} />
        <h1>
          Loading
          <span>
            <Typewriter words={['...', '...']} loop={0} />
          </span>
        </h1>
      </div>
    </div>
  )
}
export default LoadingPage
