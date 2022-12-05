// import React from 'react'

import LittoralPhoto from '../../assets/IMG.jpg'
import LodgingPhoto from '../../assets/accommodation-20-1.jpg'
import LodgingPhotoB from '../../assets/accommodation-1-1.jpg'

function Home() {
  return (
    <div className="home">
      <header className="homeHeader">
        <div className="homeTitle">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="homeHeaderImg">
          <img src={LittoralPhoto} alt="littoral" />
        </div>
      </header>

      <main className="mainHome">
        <div className="card">
          <div className="cardTitle">
            <h2>Titre de la location</h2>
          </div>
          <div className="cardGradient"></div>
          <div className="cardPhoto">
            <img src={LodgingPhoto} alt="Logement" />
          </div>
        </div>
        <div className="card">
          <div className="cardTitle">
            <h2>Titre de la location</h2>
          </div>
          <div className="cardGradient"></div>
          <div className="cardPhoto">
            <img src={LodgingPhotoB} alt="Logement" />
          </div>
        </div>
        <div className="card">
          <div className="cardTitle">
            <h2>Titre de la location</h2>
          </div>
          <div className="cardGradient"></div>
          <div className="cardPhoto">
            <img src={LodgingPhotoB} alt="Logement" />
          </div>
        </div>
        <div className="card">
          <div className="cardTitle">
            <h2>Titre de la location</h2>
          </div>
          <div className="cardGradient"></div>
          <div className="cardPhoto">
            <img src={LodgingPhotoB} alt="Logement" />
          </div>
        </div>
        <div className="card">
          <div className="cardTitle">
            <h2>Titre de la location</h2>
          </div>
          <div className="cardGradient"></div>
          <div className="cardPhoto">
            <img src={LodgingPhotoB} alt="Logement" />
          </div>
        </div>
        <div className="card">
          <div className="cardTitle">
            <h2>Titre de la location</h2>
          </div>
          <div className="cardGradient"></div>
          <div className="cardPhoto">
            <img src={LodgingPhotoB} alt="Logement" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
