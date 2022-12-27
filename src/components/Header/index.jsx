import Navbar from '../Navbar'
import LogoRed from '../../assets/LOGO_Kasa.svg'

function Header() {
  return (
    <header className="header">
      <img src={LogoRed} alt="logo" className="headerLogo" />
      <Navbar />
    </header>
  )
}

export default Header
