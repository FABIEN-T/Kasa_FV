import LogoWhite from '../../assets/LOGO_Kasa_White.svg'

function Footer() {
  return (
    <footer>
      <h3 className="h3Logo">
        <img src={LogoWhite} alt="Logo de l'entreprise Kasa" />
      </h3>

      <h3 className="footerCopyrights">© 2020 Kasa. All rights reserved</h3>
    </footer>
  )
}

export default Footer
