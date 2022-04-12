import React from 'react'
import Styled from 'styled-components'

function Footer() {
  return (
    <Container>
    
        <Wrap>
            <p>© 2022 All rights reserved. Powered by VIRG-TECH.</p>
        </Wrap>
    </Container>
  )
}

export default Footer
const Container = Styled.div`
    min-height:12vh;
    background:#1d262d;
    display:flex;
    border-top :3px solid red;
`

const Wrap= Styled.div`
display:flex;
align-items:center;
align-content:center;
margin:auto;
    p{
       color:white;
       font-size:25px;
  
       @media(max-width:768px){
        font-size:15px;
    }
  
  
    }
    
    
`