import lodgingData from '../../datas/logements.json'
import Banner from '../../common/Banner'
import HomeCard from '../../components/HomeCard'

function Home() {
  return (
    <main className="mainHome">
      <div className="banner bannerHomeMobile">
        <Banner
          title={'Chez vous, partout et ailleurs'}
          imageBanner="bannerLittoral"
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
