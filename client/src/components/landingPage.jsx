import React from "react";
import Masthead from "./Masthead.jsx";
import LiquidSample from "../images/LiquidSample.jpg"
import Styled from "styled-components"
import Footer from "./Footer.jsx";
import "animate.css"


const landingPage = () => {
  return (
    <div>
      <Masthead/>
      <div>
      <Text>
        <h1 class="animate__animated animate__rotateIn">Step into a world of swirly delights...</h1>
      <br/>
      <p style={{width: "60%", margin: "auto", color: "black"}}>
        We are continuously working on the site and excited to share Pigment Pond and his surreal menagerie of colors.  Stay tuned as we improve our website and make it mobile responsive.  <br/> Version 2 coming soon!
      </p>
      </Text>
      <img src={LiquidSample} alt="LiquidSample" width="100%"/>
      </div>
      <Footer/>
    </div>
  )
}

export default landingPage

const Text = Styled.div
`
position: absolute;
z-index: 2;
font-size: 50px;
width: 100%;
margin-top: 25px;
color: darkblue;
font-weight: 900;
`