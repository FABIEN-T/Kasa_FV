import starRed from '../../assets/starRed.svg'
import starGrey from '../../assets/starGrey.svg'

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div>
      {range.map((rangeElement) =>
        rating >= rangeElement ? (
          <img key={rangeElement.toString()} src={starRed} alt="starRed" />
        ) : (
          <img key={rangeElement.toString()} src={starGrey} alt="starGrey" />
        )
      )}
    </div>
  )
}

export default Rating
// <span key={rangeElement.toString()}>{starRed}</span>
