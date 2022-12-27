import { useState } from 'react'
import arrowNext from '../../assets/arrowNext.svg'
import arrowPrevious from '../../assets/arrowPrevious.svg'

function Slideshow({ pictures }) {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  // console.log('current', current)

  // if (Array.isArray(pictures) || pictures.length <= 0) {
  //   return null
  // }

  return (
    <section className="Slideshow">
      <p>
        {current + 1}/{length}
      </p>
      {/* <button className="arrowNext"> */}
      {pictures.length >= 2 ? (
        <div>
          <img
            src={arrowPrevious}
            alt="arrow Previous"
            className="arrowPrevious"
            onClick={prevSlide}
          />
          <img
            src={arrowNext}
            alt="arrow Next"
            className="arrowNext"
            onClick={nextSlide}
          />
        </div>
      ) : null}

      {pictures.map((picture, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img
                key={`${picture}-${index}`}
                src={picture}
                alt="photos de l'appartement"
                className="image"
              />
            )}
            {console.log('current/index', current, index, index === current)}
          </div>
        )
      })}
      {/* <img src={pictures[0]} alt="appartement" /> */}
      {/* <div className="arrows"> */}
    </section>
  )
}

export default Slideshow
