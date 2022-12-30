import lodgingData from '../../datas/logements.json'
import Banner from '../../components/Banner'
import HomeCard from '../../components/HomeCard'
import LittoralPhoto from '../../assets/IMG.jpg'

function Home() {
  return (
    <main className="mainHome">
      <div className="banner bannerImageMobile">
        <Banner
          title={'Chez vous, partout et ailleurs'}
          image={LittoralPhoto}
        />
      </div>
      <div className="homeGallery">
        <ul>
          {lodgingData.map(({ id, title, cover }) => (
            <HomeCard key={id} id={id} title={title} cover={cover} />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Home
