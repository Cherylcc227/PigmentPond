import React from "react";
import {Link} from "react-router-dom";
import Enter from "../images/Enter.jpg"
import Styled from "styled-components"
import "animate.css"

const EnterSite = () => {
  return (
    <div>
      <Text>
      <h1 class="animate__animated animate__heartBeat">PIGMENT POND</h1>
       <Link to="/Home" className="link" >ENTER</Link>
      </Text>
      <EnterImg src={Enter} alt="Enter" />
    </div>
  )
}

export default EnterSite

const Text = Styled.div
`
position: absolute;
z-index: 2;
width: 100%;
margin-top: 25px;
color: yellow;
font-weight: 900;
@media (min-width: 320px) {
  font-size: xx-large;]
}
@media (min-width: 790px) {
  font-size: xxx-large;
}
@media (min-width: 1200px) {
  font-size: 90px;
}
`

const EnterImg = Styled.img
`
@media (min-width: 320px) {
  width: 700px;
  height: 900px;
}
@media (min-width: 790px) {
  width: 900px;
  height: 1200px;
}
@media (min-width: 1200px) {
  width: 100%;
  height: 100%;
}
`