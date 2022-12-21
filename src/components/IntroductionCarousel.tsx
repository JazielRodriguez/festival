import React from 'react'
import { IntroductionCarouselProps } from '../types/props'
const IntroductionCarousel: React.FC<IntroductionCarouselProps> = (props) => {
  return (
    <div>
      {props.images?.map((image, index) => (
        <div key={index}>
          <img src={image} />
        </div>
      ))}
    </div>
  )
}
export default IntroductionCarousel
