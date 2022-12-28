function LodgingSheetInfo({ title, location, host }) {
  return (
    <section className="lodgingSheetPresentation">
      <article className="lodgingTitle">
        <h1>{title}</h1>
        <p>{location}</p>
      </article>
      <aside className="seller">
        <div className="nameSeller">
          <p>{host.name.split(' ')[0]}</p>
          <p>{host.name.split(' ')[1]}</p>
        </div>
        <div className="photoSeller">
          <img src={host.picture} alt={host.name} />
        </div>
      </aside>
    </section>
  )
}

export default LodgingSheetInfo
