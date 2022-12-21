import React from 'react'
import { IntroductionGalleryProps } from '../types/props'
import styles from './IntroductionGallery.module.css'
const IntroductionGallery: React.FC<IntroductionGalleryProps> = (props) => {
  return (
    <div className={styles.carousel}>
      {props.images?.map((image, index) => (
        <div key={index} className={styles.cover}>
          <img src={image} />
        </div>
      ))}
    </div>
  )
}
export default IntroductionGallery
