// import styled from 'styled-components'
import React from 'react'
// import colors from '../../utils/style/color'
import LogoWhite from '../../assets/LOGO_Kasa_White.svg'
import '../../index.css'

// const FooterWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: black;
//   height: 209px;
// `

// const FooterLogo = styled.img`
//   height: 39.44px;
//   color: white;
// `

// const Copyrights = styled.div`
//   color: white;
// `

function Footer() {
  return (
    // <FooterWrapper>
    //   <FooterLogo src={Logo} alt="logo" />
    //   <Copyrights>© 2020 Kasa. All rights reserved</Copyrights>
    // </FooterWrapper>
    <div className="footer">
      <img src={LogoWhite} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
