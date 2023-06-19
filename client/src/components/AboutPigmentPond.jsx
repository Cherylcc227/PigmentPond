import React from "react";
import Masthead from "./Masthead.jsx"
import PigmentPond1 from "../images/PigmentPond1.jpg"
import Styled from "styled-components"
import Footer from "./Footer.jsx";

const AboutPigmentPond = () => {
  return (
    <div>
      <Masthead/>
      <AboutContainer>
        <Description>
          <h2 style={{color: 'darkRed'}}>About Pigment Pond</h2>
          Hailing from the East Coast, Pigment Pond landed in the Denver area in 2019.  He has become a notable visual stage setter, collaborating with over 50 local Denver bands with his light shows and videography. Pigment Pond combines love of music and visual displays to deliver energetic, colorfully ecclectic backdrops. Hanging behind a projector, this mad scientist wields anything from pigments to crystals and glass creating scenes that will entrance you. Need a videographer? Pigment Pond's VHS footage adds extra
          pizazz and personality to your musical memory.
        </Description>
        <PigmentPondMainPhotoImg
        src={PigmentPond1}
        alt="Pigment Pond"

        />
      </AboutContainer>
      <Footer/>
    </div>
  )
}

export default AboutPigmentPond

const AboutContainer = Styled.div
`
display: flex;
flex-direction: row;
gap: 50px;
margin-top:100px;
width: 100%;
  @media (min-width: 320px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }


`

const PigmentPondMainPhotoImg = Styled.img
`
// margin: auto;
border-radius: 50px;
@media (max-width: 320px) {
  width: 30%;
  height: 30%;
}
@media (min-width: 790px) {
  width: 60%;
  height: 60%;
}
@media (min-width: 1200px) {
  width: 40%;
  height: 40%;
}
`

const Description = Styled.div `
width: 80%;
margin-left: auto;
margin-right: auto;
margin-top: 5px;

@media (min-width: 320px) {
  flex-direction: column-reverse;
  font-size: larger;
  margin-bottom: 20px;
}

@media (min-width: 1200px) {
  font-size: 40px;
  width: 50%;
  // margin: auto;
  padding:5px;
}`

