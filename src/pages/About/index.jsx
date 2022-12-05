// import { Link } from 'react-router-dom'
import MountainPhoto from '../../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.jpg'

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

      <main className="mainAbout"></main>
    </div>
  )
}

export default About
