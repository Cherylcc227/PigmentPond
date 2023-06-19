import React from "react";
import {Link} from "react-router-dom";
import Enter from "../images/Enter.jpg"
import Styled from "styled-components"

const EnterSite = () => {
  return (
    <div>
      <Text>
      <h1>PIGMENT POND</h1>
       <Link to="/Home" className="link" style={{ fontSize: '500px' }}>ENTER</Link>
      </Text>
      <img src={Enter} alt="Enter" width="100%"/>
    </div>
  )
}

export default EnterSite

const Text = Styled.div
`
position: absolute;
z-index: 2;
font-size: 90px;
width: 100%;
margin-top: 25px;
color: yellow;
font-weight: 900;
`