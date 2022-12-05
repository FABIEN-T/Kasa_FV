// import { Link } from 'react-router-dom'
import MountainPhoto from '../../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.jpg'
// import chevronDown from '../../assets/chevronDown.svg'
import chevronUp from '../../assets/chevronUp.svg'

function About() {
  return (
    <div>
      <header className="pageHeader">
        <div className="pageTitle">
          <h1> </h1>
        </div>
        <div className="pageHeaderImg">
          <img src={MountainPhoto} alt="littoral" />
        </div>
      </header>

      <main className="mainAbout">
        <div className="aboutCollapse">
          <div className="aboutCollapseHeader">
            <h2>Fiabilité</h2>
            <img src={chevronUp} alt="chevronUp" className="chevron" />
          </div>
          <div className="aboutCollapseParagrah">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>
        <div className="aboutCollapse">
          <div className="aboutCollapseHeader">
            <h2>Respect</h2>
            <img src={chevronUp} alt="chevronUp" className="chevron" />
          </div>
          <div className="aboutCollapseParagrah">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entraînera une exclusion de notre plateforme.
            </p>
          </div>
        </div>

        <div className="aboutCollapse">
          <div className="aboutCollapseHeader">
            <h2>Service</h2>
            <img src={chevronUp} alt="chevronUp" className="chevron" />
          </div>
          <div className="aboutCollapseParagrah">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </div>

        <div className="aboutCollapse">
          <div className="aboutCollapseHeader">
            <h2>Sécurité</h2>
            <img src={chevronUp} alt="chevronUp" className="chevron" />
          </div>
          <div className="aboutCollapseParagrah">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default About
