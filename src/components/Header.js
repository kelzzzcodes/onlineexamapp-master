import React from 'react' 
import Styled from  'styled-components'
function Header() {
  return (
    <Container>
        <Logo>
          <img src='/images/logo.jpg'/>
          
          
        </Logo>
        <Title>
          <span>
          WAEC PREPARATORY EXERCISE PAGE
          </span>
        </Title>
    </Container>
  )
}

export default Header
const Container =Styled.div`
    
    min-height:12vh;
    background-color:#1d262d;
    align-items:center;
    color:white;
    display:flex;
    justify-content:space-around;
    border-bottom: 3px solid red;
    
`


const Logo = Styled.div`
  cursor:pointer;
  display:flex;
  align-items:center;
  
  img{
    width:200px;
    height:65px;
    object-fit:cover;
    padding: 0 12px;
    border-radius:15px;
    position:relative;
    @media(max-width:768px){
      width:100px;
      padding:0 
  }
    
  }
     
   
  
`
const Title=Styled.div`
  padding: 0 12px 0px 0px;
  span{
    font-size:25px;
    font-weight:bolder;
    
    @media(max-width:768px){
      font-size:15px;
  }
  }

`

