function Banner({ title, imageBanner }) {
  return (
    <section>
      <div className={`pageTitle ${imageBanner}`}>
        <h2>{title}</h2>
      </div>
    </section>
  )
}

export default Banner
