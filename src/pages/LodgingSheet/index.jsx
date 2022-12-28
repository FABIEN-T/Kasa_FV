import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import lodgingData from '../../datas/logements.json'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import LodgingSheetInfo from '../../components/LodgingSheetInfo'
import Slideshow from '../../components/Slideshow'

function LodgingSheet() {
  const { id } = useParams()

  const lodgingSheetSelected = lodgingData.find((lodging) => lodging.id === id)

  // console.log('undefined ?', lodgingSheetSelected === undefined)

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
        <main className="lodgingSheet">
          <Slideshow pictures={pictures} />
          <section>
            <LodgingSheetInfo title={title} location={location} host={host} />
            <article className="tagsScore">
              <Tags tags={tags} />
              <Rating rating={rating} />
            </article>
          </section>

          <section className="descriptionEquipement">
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
          </section>
        </main>
      )}
    </>
  )
}

export default LodgingSheet
