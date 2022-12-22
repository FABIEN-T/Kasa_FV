import { useState } from 'react'
import arrowNext from '../../assets/arrowNext.svg'
import arrowPrevious from '../../assets/arrowPrevious.svg'

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0)
  const length = pictures.length

  return (
    <section className="carousel">
      {/* <button className="arrowNext"> */}
      <img
        src={arrowPrevious}
        alt="arrowPrevious_vector"
        className="arrowPrevious"
        // onClick={prevSlide}
      />
      <img
        src={arrowNext}
        alt="arrowNext_vector"
        className="arrowNext"
        // onClick={nextSlide}
      />
      {/* </button> */}
      {/* <button className="arrowPrevious"> */}

      {/* </button> */}
      {pictures.map((picture, index) => {
        return (
          <>
            <img
              key={`${picture}-${index}`}
              src={picture}
              alt="photos de l'appartement"
              className="image"
            />
          </>
        )
      })}
      {/* <img src={pictures[0]} alt="appartement" /> */}
      {/* <div className="arrows"> */}
    </section>
  )
}

export default Carousel
