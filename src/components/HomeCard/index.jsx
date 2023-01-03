import { Link } from 'react-router-dom'
// import lodgingData from '../../datas/logements.json'

function HomeCard({ id, title, cover }) {
  return (
    <li key={id} className="card">
      <Link key={`${id}`} to={`/lodging-sheet/${id}`}>
        <div className="cardTitle">
          <h3>{title}</h3>
        </div>
        <div className="cardGradient"></div>
        <div className="cardPhoto">
          <img src={cover} alt={title} />
        </div>
      </Link>
    </li>
  )
}

export default HomeCard
