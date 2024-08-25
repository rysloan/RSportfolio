import { useState, useCallback, useEffect } from 'react'
import styles from './image.css'
import MagGlass from '../../assets/walmart.png'
import Exitbutton from '../../assets/twitter.png'

const Image = ({ zoom, border, ...rest }) => {
  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      setClick(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [])

  const [click, setClick] = useState(false)
  const [hovered, setHovered] = useState(false)

  const setFlag = () => {
    setClick(true)
  }

  const unsetFlag = () => {
    setClick(false)
  }

  const onEnter = () => {
    setHovered(true)
  }
  const onExit = () => {
    setHovered(false)
  }

  if (!zoom) return <img {...rest} alt='' />
  else
    return (
      <>
        {click ? (
          <div className={`${styles.lightbox} ${styles.show} relative`}>
            <img {...rest} alt='' className={`${styles.show_image}`}></img>
            <img
              onClick={unsetFlag}
              className={`absolute right-4 -top-8 h-8 w-8`}
              src={Exitbutton}
              alt=''
            />
          </div>
        ) : (
          <div className="relative" onMouseEnter={onEnter} onMouseLeave={onExit}>
            <img
              {...rest}
              className={`relative ${border && 'p-0.5 rounded bg-gray-700 dark:bg-gray-800'}`}
              alt=''
            ></img>
            {hovered && (
              <img
                onClick={setFlag}
                className={`absolute -bottom-6 left-2 h-8 w-8 p-0.5 rounded bg-gray-700 dark:bg-gray-800`}
                src={MagGlass}
                alt=''
              />
            )}
          </div>
        )}
      </>
    )
}

export default Image
