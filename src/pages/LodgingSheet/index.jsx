import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import lodgingData from '../../datas/logements.json'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import Collapse from '../../common/Collapse'
import Slideshow from '../../components/Slideshow'

function LodgingSheet() {
  const { id } = useParams()
  const lodgingSheetSelected = lodgingData.find((lodging) => lodging.id === id)

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = lodgingSheetSelected ?? {}

  const navigate = useNavigate()
  useEffect(() => (!lodgingSheetSelected ? navigate('/*') : undefined))

  return (
    <>
      {!lodgingSheetSelected ? (
        <h1>Redirection...</h1>
      ) : (
        <main className="lodgingSheet">
          <Slideshow pictures={pictures} />

          <section className="lodgingPresentation">
            <div className="lodgingTitleTags">
              <article className="lodgingTitleLocation">
                <h2>{title}</h2>
                <p>{location}</p>
              </article>
              <Tags tags={tags} />
            </div>

            <div className="lodgingSellerRating">
              <div className="seller">
                <div className="nameSeller">
                  <p>{host.name.split(' ')[0]}</p>
                  <p>{host.name.split(' ')[1]}</p>
                </div>
                <div className="photoSeller">
                  <img src={host.picture} alt={host.name} />
                </div>
              </div>
              <article className="rating">
                <Rating rating={rating} />
              </article>
            </div>
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
