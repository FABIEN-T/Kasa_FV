import Lodging from '../../assets/Background.jpg'
import Profil from '../../assets/profile-picture-12.jpg'
// import starGrey from '../../assets/starGrey.svg'
import starRed from '../../assets/starRed.svg'
import Chevron from '../../assets/chevronDown.svg'

function LodgingSheet() {
  return (
    <div className="lodgingSheet">
      <div className="lodgingPhoto">
        <img src={Lodging} alt="appartement" />
      </div>
      <header className="lodgingSheetHeader">
        <div className="headerLeft">
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <p>Paris, Île-de-France</p>
        </div>
        <div className="headerRight">
          <div className="nameSeller">
            <p>Alexandra</p>
            <p>Dumas</p>
          </div>
          <div className="photoSeller">
            <img src={Profil} alt="Profil" />
          </div>
        </div>
      </header>
      <div className="tagsScore">
        <div className="tagsDiv">
          <div className="tag">
            <span>Cozy</span>
          </div>
          <div className="tag">
            <span>Canal</span>
          </div>
          <div className="tag">
            <span>Paris</span>
          </div>
        </div>
        <div className="score">
          <img src={starRed} alt="score" />
          <img src={starRed} alt="score" />
          <img src={starRed} alt="score" />
          <img src={starRed} alt="score" />
          <img src={starRed} alt="score" />
        </div>
      </div>
      <div className="details">
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
