import React from "react";
import Masthead from "./Masthead.jsx"
import {SocialIcon} from "react-social-icons"
import Styled from "styled-components"
import Footer from "./Footer.jsx";
import Coffee from "../images/Coffee.jpg"

const ContactPage = () => {
  return (
    <div>
      <Masthead/>
      <ContactContainer>
      <div>
        Any support is greatly appreciated! Buy Pigment Pond a Coffee ?
        <br/>
      <a href="https://www.buymeacoffee.com/PigmentPond" style={{color: "yellow"}} target="blank_"> <br/> Keep Pigment Pond Caffeinated! </a>
      </div>
      <br/>
      <img src={Coffee} alt="Coffee" height="300px" width="300px" style={{borderRadius: "50px"}}/>
      <br/>
      <br/>
      <br/>
      <div>
        For the latest activity or contact, check out Pigment Pond's <br/> IG page @pigment-pond or Youtube Channel, "Pandinus Imperator"
        <br/>
        <br/>
        <div style={{display: "flex", gap: "30px", justifyContent: "center"}}>
        <SocialIcon url="https://www.instagram.com/pigment_pond/?hl=en" />
        <SocialIcon url="https://www.youtube.com/@pandinusimperator643" />
        </div>
        <br/>
        <br/>
        <h1>
        To contact feel free to reach out on IG!
      </h1>

      </div>
      <br/>
      <div>
      {/* <a href="mailto:email@example.com">Click to Send an Email</a> */}
      </div>
    </ContactContainer>
    <Footer/>
    </div>
  )
}

export default ContactPage

const ContactContainer = Styled.div
`
font-size: xx-large;
margin-top:
`