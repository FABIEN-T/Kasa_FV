import { Link } from 'react-router-dom'
import React from 'react'
// import styled from 'styled-components'
// import colors from '../../utils/style/color'
// import Logo from '../../assets/LOGO_Kasa.svg'
// import { StyledLink } from '../../utils/style/Atoms'
import LogoRed from '../../assets/LOGO_Kasa.svg'

// const NavContainer = styled.div`
//   padding: 30px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `
// const HomeLogo = styled.img`
//   height: 70px;
// `

// const HeadLogo = styled.img`
//   height: 68px;
// `

function Header() {
  return (
    <nav>
      <img src={LogoRed} alt="logo" />
      {/* <HeadLogo src={Logo} alt="logo" /> */}
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>

    // <NavContainer>
    //   <Link to="/">
    //     <HomeLogo src={DarkLogo} alt="logo" />
    //   </Link>
    //   <nav>
    //     {/* <Link to="/" className="Header">
    //     Accueil
    //   </Link> */}
    //     <StyledLink to="/">Accueil</StyledLink>
    //     {/* <Link to="/freelances" className="Header">
    //     Profils
    //   </Link> */}
    //     <StyledLink to="/freelances">Profils</StyledLink>
    //     {/* <Link to="/survey/1" className="Header">
    //     Questionnaire
    //   </Link> */}
    //     <StyledLink to="/survey/1" $isFullLink>
    //       Faire le test
    //     </StyledLink>
    //   </nav>
    // </NavContainer>
  )
}

export default Header
