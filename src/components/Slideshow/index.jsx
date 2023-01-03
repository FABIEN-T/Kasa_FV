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

  return (
    <section className="Slideshow">
      {pictures.length >= 2 ? (
        <div>
          <p>
            {current + 1}/{length}
          </p>
          <div className="arrows">
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
        </div>
      ) : null}

      {pictures.map((picture, index) => {
        return (
          <div className="slide" key={index}>
            {index === current && (
              <img
                key={`${picture}-${index}`}
                src={picture}
                alt="photos de l'appartement"
                className="image"
              />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default Slideshow
