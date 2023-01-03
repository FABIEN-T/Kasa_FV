import aboutData from '../../datas/aboutData.json'
import Banner from '../../common/Banner'
import Collapse from '../../common/Collapse'

function About() {
  return (
    <main className="mainAbout">
      <div className="banner">
        <Banner title={'Paysage montagneux'} imageBanner="bannerLittoral" />
      </div>

      <section className="about">
        {aboutData.map(({ title, description }, index) => (
          <div key={`${title}-${index}`}>
            <Collapse title={title} content={description} type={'paragraph'} />
          </div>
        ))}
      </section>
    </main>
  )
}

export default About
