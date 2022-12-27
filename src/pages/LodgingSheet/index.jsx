import { useParams, Link, redirect, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import lodgingData from '../../datas/logements.json'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'

function LodgingSheet() {
  const { id } = useParams()

  const lodgingSheetSelected = lodgingData.find((lodging) => lodging.id === id)

  console.log('undefined ?', lodgingSheetSelected === undefined)

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = lodgingSheetSelected ?? {} //  ?? : opérateur de coalescence des nuls l'opérande de gauche sera renvoyé s'il s'agit d'une valeur équivalente à false qui n'est ni null, ni undefined

  const navigate = useNavigate()
  useEffect(() => (!lodgingSheetSelected ? navigate('/*') : undefined))

  // console.log('idUp', lodgingSheetSelected.id === id)

  return (
    <>
      {!lodgingSheetSelected ? (
        <h1>Redirection...</h1>
      ) : (
        <div className="lodgingSheet">
          {/* {console.log('idDown', lodgingSheetSelected.id === id)} */}
          <Slideshow pictures={pictures} />

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

          <div className="article">
            <Collapse
              title={'Description'}
              content={description}
              type={'paragraph'}
            />
            <Collapse
              title={'Équipements'}
              content={equipments}
              type={'list'}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default LodgingSheet
