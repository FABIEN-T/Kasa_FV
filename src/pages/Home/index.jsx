import lodgingData from '../../datas/logements.json'
import HeaderPage from '../../components/HeaderPage'
import HomeCard from '../../components/HomeCard'
import LittoralPhoto from '../../assets/IMG.jpg'

function Home() {
  return (
    <div>
      <HeaderPage
        title={'Chez vous, partout et ailleurs'}
        image={LittoralPhoto}
      />

      <ul className="mainHome">
        {lodgingData.map(({ id, title, cover }) => (
          <HomeCard key={id} id={id} title={title} cover={cover} />
        ))}
      </ul>
    </div>
  )
}

export default Home
