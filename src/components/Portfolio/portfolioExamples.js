import React from 'react'
import './portfolioExamples.css'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery";
import { imgs } from './images/images'
import ImgDesc from './imageDescriptions/imageDescriptions';

const IvorfallIntro = () => {
  return (
    <section id='skills'>
      <section id='portfolioExamples'>
        <div className='portfolioCodeSnipets'>
          <span className='codeSnipetTitle'>Portfolio Code Snipets</span>
          <ImageGallery items={imgs} useBrowserFullscreen={false} showIndex={true} showBullets={true} />
          <span className='imageDescriptions'>
            <ImgDesc />
          </span>
        </div>
      </section>
    </section>
  )
}

export default IvorfallIntro