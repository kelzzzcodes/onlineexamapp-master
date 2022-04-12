import React from 'react'
import Styled from 'styled-components'

function Home() {
  return (
    <Container>
      <Wrap>
          <p>
          <span>WELCOME TO WAEC </span><span>PREPARATORY EXERCISE</span>
           </p>
          
      </Wrap>
        <Image>
          <img src='/images/onlinetestbg.jpg'/>
        </Image>
          
      
      <Wrap>
          <formData>
            <wrapper>
            <label>Full Name</label>
            <input type="text"/>
            </wrapper>
            <wrapper>
            <label>Select your subject</label>
            <select>
              <option>
                English
              </option>
              <option>
                Mathematics
              </option>
              <option>
                Physics
              </option>
              <option>
                Chemistry
              </option>
            </select>
            </wrapper>
            <Button>
                <button>Begin Test</button>
            </Button>
          </formData>
            
            

      </Wrap>
    
    </Container>
  )
}

export default Home

const Container= Styled.div`
  display:grid;
  grid-gap:25px;
  min-height:76vh;
  grid-template-columns: repeat(3,minmax(0,1fr));
  align-items:center;
  overflow:hidden;
  margin:0 auto;
 
  
  @media(max-width:768px){
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
}
  
`
const Image= Styled.div`
img{
  width:100%;
  object-fit:cover;
}
@media(max-width:768px){
  display:none;
}
 
`
const Wrap =Styled.div`
display:flex;
padding:0 calc(3.5vw + 5px);

  

  p{
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    font-size:25px;
    
  }

  
    
    
    
  }
  formData{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    border: 2px solid orange;
    padding: 20px;
    border-radius:7px;
    
    
  }
  formData wrapper{
    display:flex;
    flex-direction:column;
    padding: 10px 0px;
    align-items:flex-start;

    
    
  }
  formData wrapper >label{
    padding-bottom:10px;
  }
  formData wrapper >input{
    width:100%;
    height:25px;
    outline:2px solid orange;
    border:none;
    border-radius:3px;
  }
  formData wrapper >select{
    width:100%;
    height:25px;
    outline:2px solid orange;
    border:none;
    border-radius:3px;
  }
 


`

const Button= Styled.div`
  button{
    background:#0d3b66;
    color:white;
    border:none;
    border-radius:3px;
    width:150px;
    height:30px;
  }

`