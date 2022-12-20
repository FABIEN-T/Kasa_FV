import { Link } from 'react-router-dom'
// import lodgingData from '../../datas/logements.json'

function HomeCard({ id, title, cover }) {
  return (
    <Link key={`${id}`} to={`/lodging-sheet/${id}`}>
      <li key={id} className="card">
        <div className="cardTitle">
          <h2>{title}</h2>
        </div>
        <div className="cardGradient"></div>
        <div className="cardPhoto">
          <img src={cover} alt={title} />
        </div>
      </li>
    </Link>
  )
}

export default HomeCard
