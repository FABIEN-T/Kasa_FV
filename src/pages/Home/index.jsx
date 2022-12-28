import lodgingData from '../../datas/logements.json'
import Banner from '../../components/Banner'
import HomeCard from '../../components/HomeCard'
import LittoralPhoto from '../../assets/IMG.jpg'

function Home() {
  return (
    <section>
      <Banner title={'Chez vous, partout et ailleurs'} image={LittoralPhoto} />

      <ul className="homeGallery">
        {lodgingData.map(({ id, title, cover }) => (
          <HomeCard key={id} id={id} title={title} cover={cover} />
        ))}
      </ul>
    </section>
  )
}

export default Home
