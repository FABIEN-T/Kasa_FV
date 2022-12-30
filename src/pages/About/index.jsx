import aboutData from '../../datas/aboutData.json'
import MountainPhoto from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

function About() {
  return (
    <main className="mainAbout">
      <div className="banner">
        <Banner title={' '} image={MountainPhoto} />
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
