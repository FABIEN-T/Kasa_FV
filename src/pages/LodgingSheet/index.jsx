import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import lodgingData from '../../datas/logements.json'
import Lodging from '../../assets/Background.jpg'
import Profil from '../../assets/profile-picture-12.jpg'
// import starGrey from '../../assets/starGrey.svg'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import starRed from '../../assets/starRed.svg'
import Chevron from '../../assets/chevronDown.svg'

function LodgingSheet() {
  const { id } = useParams()
  const lodgingSheetSelected = lodgingData.find((lodging) => lodging.id === id)
  // console.log('lodgingId', id)
  // console.log('lodgingSheetId', lodgingSheetId)

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
      <div className="lodgingPhoto">
        <img src={pictures[0]} alt="appartement" />
      </div>
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
        {/* <Collapse description={description} typeFormat={paragraph} /> */}
        <div className="aboutCollapse">
          <div className="aboutCollapseHeader">
            <h2>Description</h2>
            <img src={Chevron} alt="chevron" className="chevron" />
          </div>

          <div className="aboutCollapseParagrah">
            <p>
              Vous serez à 50m du canal Saint-martin où vous pourrez
              pique-niquer l'été et à côté de nombreux bars et restaurants. Au
              cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement
              parfait pour les voyageurs en solo et les voyageurs d'affaires.
              Vous êtes à1 station de la gare de l'est 7 minutes à pied .
            </p>
          </div>
        </div>
        {/* <Collapse description={description} typeFormat={paragraph} /> */}
        <div className="aboutCollapse">
          <div className="aboutCollapseHeader">
            <h2>Équipements</h2>
            <img src={Chevron} alt="chevron" className="chevron" />
          </div>
          <div className="aboutCollapseParagrah">
            <ul>
              <li>Climatisation</li>
              <li>Wi-Fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LodgingSheet
