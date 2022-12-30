function Banner({ title, image }) {
  return (
    <section>
      <div className="pageTitle">
        <h1>{title}</h1>
      </div>
      <div className="bannerImg">
        <img src={image} alt={title} className="image" />
      </div>
    </section>
  )
}

export default Banner
