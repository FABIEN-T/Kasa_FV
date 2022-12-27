import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import LogoRed from '../../assets/LOGO_Kasa.svg'

function Header() {
  // const [isOpen, setIsOpen] = useState(isOpen)
  return (
    <nav className="header">
      <img src={LogoRed} alt="logo" className="headerLogo" />
      <div className="headernavBar">
        {/* <Link to="/" className={`navBar ${isOpen && "is-active}`}
        >
          Accueil
        </Link>
      <Link to="/about" className={`navBar ${isOpen && "is-active}`}
        onClick={() => setIsOpen(isOpen)}
        >
          A propos
        </Link> */}
        <Link to="/" className="navBar">
          Accueil
        </Link>
        <Link to="/about" className="navBar">
          A propos
        </Link>
      </div>
    </nav>
  )
}

// function Header() {
//   return (
//     <nav>
//       <img src={LogoRed} alt="logo" />
//       {/* <HeadLogo src={Logo} alt="logo" /> */}
//       <Link to="/">Accueil</Link>
//       <Link to="/about">A propos</Link>
//     </nav>

//     // <NavContainer>
//     //   <Link to="/">
//     //     <HomeLogo src={DarkLogo} alt="logo" />
//     //   </Link>
//     //   <nav>
//     //     {/* <Link to="/" className="Header">
//     //     Accueil
//     //   </Link> */}
//     //     <StyledLink to="/">Accueil</StyledLink>
//     //     {/* <Link to="/freelances" className="Header">
//     //     Profils
//     //   </Link> */}
//     //     <StyledLink to="/freelances">Profils</StyledLink>
//     //     {/* <Link to="/survey/1" className="Header">
//     //     Questionnaire
//     //   </Link> */}
//     //     <StyledLink to="/survey/1" $isFullLink>
//     //       Faire le test
//     //     </StyledLink>
//     //   </nav>
//     // </NavContainer>
//   )
// }

export default Header
