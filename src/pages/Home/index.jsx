import lodgingData from '../../datas/logements.json'
import Banner from '../../components/Banner'
import HomeCard from '../../components/HomeCard'
import LittoralPhoto from '../../assets/IMG.jpg'

function Home() {
  return (
    <div>
      <Banner title={'Chez vous, partout et ailleurs'} image={LittoralPhoto} />

      <ul className="mainHome">
        {lodgingData.map(({ id, title, cover }) => (
          <HomeCard key={id} id={id} title={title} cover={cover} />
        ))}
      </ul>
    </div>
  )
}

export default Home
