import { useParams } from 'react-router-dom'
import lodgingData from '../../datas/logements.json'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'

function LodgingSheet() {
  const { id } = useParams()
  const lodgingSheetSelected = lodgingData.find((lodging) => lodging.id === id)

  const {
    title,
    cover,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = lodgingSheetSelected

  return (
    <div className="lodgingSheet">
      <Carousel pictures={pictures} />

      {/* </div> */}
      {/* <lodgingHeader /> */}
      <header className="lodgingSheetHeader">
        <div className="headerLeft">
          <h1>{title}</h1>
          <p>{location}</p>
        </div>
        <div className="headerRight">
          <div className="nameSeller">
            <p>{host.name.split(' ')[0]}</p>
            <p>{host.name.split(' ')[1]}</p>
          </div>
          <div className="photoSeller">
            <img src={host.picture} alt={host.name} />
          </div>
        </div>
      </header>
      <div className="tagsScore">
        <Tags tags={tags} />
        <Rating rating={rating} />
      </div>

      <div className="details">
        <Collapse
          title={'Description'}
          content={description}
          type={'paragraph'}
        />
        <Collapse title={'Équipements'} content={equipments} type={'list'} />
      </div>
    </div>
  )
}

export default LodgingSheet
