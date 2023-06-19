import React from "react";
import Masthead from "./Masthead.jsx";
import LiquidSample from "../images/LiquidSample.jpg"
import Styled from "styled-components"
import Footer from "./Footer.jsx";
import "animate.css"


const LandingPage = () => {
  return (
    <div>
      <Masthead/>
      <div>
      <Text>
        <h1 class="animate__animated animate__rotateIn">Step into a world of swirly delights...</h1>
      <br/>
      <p style={{margin: "auto", color: "black"}}>
        We are continuously working on the site and excited to share Pigment Pond and his surreal menagerie of colors.  Stay tuned as we improve our website and make it mobile responsive.  <br/> Version 2 coming soon!
      </p>
      </Text>
      <LandingImg src={LiquidSample} alt="LiquidSample" />
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPage

const Text = Styled.div
`
position: absolute;
z-index: 2;
font-size: 50px;
margin-top: 25px;
color: darkblue;
font-weight: 900;
@media (min-width: 320px) {
  font-size: x-large;]
}
@media (min-width: 790px) {
  font-size: large;
}
@media (min-width: 1200px) {
  font-size: 90px;
}
`


const LandingImg = Styled.img
`
@media (min-width: 320px) {
  width: 700px;
  height: 900px;
}
@media (min-width: 790px) {
  width: 100%;
  height: 1200px;
}
@media (min-width: 1200px) {
  width: 100%;
  height: 100%;
}
`