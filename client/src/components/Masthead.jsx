import React from "react";
import {Link} from "react-router-dom"
import Styled from "styled-components"

const Masthead = () => {

  return (
    <MastheadContainer>
      <Link to="/Home" className="link"  >HOME</Link>
      <Link to="/AboutPigmentPond" className="link">Meet Pigment Pond</Link>
      <Link to="/Services" className="link">Services</Link>
      <Link to="/Gallery" className="link">Gallery</Link>
      <Link to="/ShowDeck" className="link">ShowDeck</Link>
      <Link to="/Contact" className="link">Contact</Link>
    </MastheadContainer>
  )
}

export default Masthead

const MastheadContainer = Styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  display: flex;
  justify-content: space-around;
  align-items: center;
  // font-size: 25px;
  margin-bottom: 24px;
  paddin: 24px;
  width: 100%;
  font-weight: 600;
  background: black;
  height: 94px;
  @media (min-width: 320px) {
    flex-direction: column;
    height: 100%;
    font-size: 25px;
  }
  @media (min-width: 720px) {
    flex-direction: row;
    height: 100%;
    font-size: 15px;
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    height: 100%;
    font-size: 25px;
  }
`