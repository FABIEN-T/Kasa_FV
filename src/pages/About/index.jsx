import aboutData from '../../datas/aboutData.json'
import MountainPhoto from '../../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.jpg'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'

function About() {
  return (
    <div>
      <Banner title={' '} image={MountainPhoto} />

      <main className="mainAbout">
        {aboutData.map(({ title, description }, index) => (
          <div key={`${title}-${index}`}>
            <Collapse title={title} content={description} type={'paragraph'} />
          </div>
        ))}
      </main>
    </div>
  )
}

export default About
