import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { festivalIsTypewriter } from '../utils/typewriterWords'
import { useDownloadImage } from '../hooks/useDownloadImage'
import { SpinnerCircular } from 'spinners-react'
import styles from './Introduction.module.css'
import IntroductionCarousel from './IntroductionCarousel'
const Introduction: React.FC = () => {
  const { imageUrl, loading } = useDownloadImage([
    'concert-image-two.webp',
    'festival-home.webp'
  ])
  return (
    <div className={styles.introduction}>
      <div>
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
      <div>
        {loading && <SpinnerCircular color='#000' size={100} />}
        {!loading && <IntroductionCarousel images={imageUrl} />}
      </div>
    </div>
  )
}
export default Introduction
