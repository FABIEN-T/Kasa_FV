function HeaderPage({ title, image }) {
  return (
    <header className="pageHeader">
      <div className="pageTitle">
        <h1>{title}</h1>
      </div>
      <div className="pageHeaderImg">
        <img src={image} alt="littoral" />
      </div>
    </header>
  )
}

export default HeaderPage
