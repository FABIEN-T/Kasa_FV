import React from 'react'
import lodgingData from '../../datas/logements.json'
import HomeCard from '../../components/HomeCard'
import LittoralPhoto from '../../assets/IMG.jpg'

function Home() {
  console.log('lodgingData[0].title', lodgingData[0].title)
  return (
    <div>
      <header className="pageHeader">
        <div className="pageTitle">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <div className="pageHeaderImg">
          <img src={LittoralPhoto} alt="littoral" />
        </div>
      </header>

      <ul className="mainHome">
        {lodgingData.map(({ id, title, cover }) => (
          <HomeCard id={id} title={title} cover={cover} />
        ))}
      </ul>
    </div>
  )
}

export default Home
