// import styled from 'styled-components'
// import colors from '../../utils/style/color'
// import React from 'react'
// const ErrorWrapper = styled.div`
//   margin: 30px;
//   display: flex;
//   flex-direction: column;
//   background-color: ${colors.background};
//   align-items: center;
// `

// const ErrorTitle = styled.h1`
//   font-weight: 300;
// `

// const ErrorSubtitle = styled.h2`
//   font-weight: 300;
//   color: ${colors.secondary};
// `

function Error() {
  return (
    // <ErrorWrapper>
    //   <ErrorTitle>404</ErrorTitle>
    //   <ErrorSubtitle>
    //     Oups! La page que vous demandez n'existe pas.
    //   </ErrorSubtitle>
    // </ErrorWrapper>
    <div>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
    </div>
  )
}

export default Error
