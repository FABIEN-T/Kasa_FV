function Banner({ title, image }) {
  return (
    <section className="banner">
      <div className="pageTitle">
        <h1>{title}</h1>
      </div>
      <div className="bannerImg">
        <img src={image} alt={title} />
      </div>
    </section>
  )
}

export default Banner
