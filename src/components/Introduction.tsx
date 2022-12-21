import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { festivalIsTypewriter } from '../utils/typewriterWords'
import { useDownloadImage } from '../hooks/useDownloadImage'
import { SpinnerCircular } from 'spinners-react'
import styles from './Introduction.module.css'
import IntroductionGallery from './IntroductionGallery'
const Introduction: React.FC = () => {
  const { imageUrl, loading } = useDownloadImage([
    'concert-image-one.webp',
    'concert-image-two.webp',
    'concert-image-three.webp',
    'concert-image-four.webp',
    'concert-image-five.webp',
    'concert-image-six.webp'
  ])
  return (
    <div className={styles.introduction}>
      <div className={styles.legend}>
        <h1>
          Festival is{' '}
          <span
            style={{
              fontStyle: 'italic',
              color: 'rgba(71, 55, 77, 1) ',
              textDecoration: 'underline'
            }}
          >
            <Typewriter words={festivalIsTypewriter} loop={0} />
          </span>
        </h1>
      </div>
      <div className={styles['carousel-container']}>
        {loading && <SpinnerCircular color='#000' size={100} />}
        {!loading && <IntroductionGallery images={imageUrl} />}
      </div>
    </div>
  )
}
export default Introduction
