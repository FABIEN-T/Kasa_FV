import starRed from '../../assets/starRed.svg'
import starGrey from '../../assets/starGrey.svg'

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div>
      {range.map((rangeElement) =>
        rating >= rangeElement ? (
          // <div>
          <img key={rangeElement.toString()} src={starRed} alt="starRed" />
        ) : (
          // </div>
          // <div>
          <img key={rangeElement.toString()} src={starGrey} alt="starGrey" />
          // </div>
        )
      )}
    </div>
  )
}

export default Rating
