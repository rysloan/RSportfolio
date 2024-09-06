import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='footer'>
        <FontAwesomeIcon icon={faGithub} alt='Facebook' className='footerLink' />
        <FontAwesomeIcon icon={faLinkedin} alt='Facebook' className='footerLink' />
    </footer>
  )
}

export default Footer