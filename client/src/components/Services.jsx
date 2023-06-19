import React from "react";
import Masthead from "./Masthead.jsx";
import Styled from "styled-components"
import Footer from "./Footer.jsx";

const Services = () => {
  return (
    <div>
      <Masthead/>
      <ServicesContainer>
      <h1 style={{color:"red"}}> Ready to take a dip into the Pigment Pond? Take a gander at the current list of provided services </h1>
      <div>
        <h2> Liquid Light Projector </h2>
        <p> $70 </p>
        <p>
          Armed with two projectors, petri dishes, vibrant pigments and liquid mediums, psychedilic ameabas dance on any surface in a dark room.  Perfectly pairs with musical tunes.
        </p>
      </div>
      <div>
        <h2> Kaleidescope Party </h2>
        <p> $70 </p>
        <p>
          Raw materials are light manipulated to create wicked mind bending geometric slithers to shatter your mind.
        </p>
      </div>
      <div>
        <h2> VHS Camera Shoot </h2>
        <p> $50 </p>
        <p>
          For that feel good vintage vibe, multiple camera angles allow a unique cinematic experience for any event.
        </p>
      </div>
      <div>
        <h2> Full Monty </h2>
        <p> $200 </p>
        <p>
          Can't decide on just one? Eat up all the Pigment Pond snacks at a delectable price.
        </p>
      </div>
      <br/>
      <br/>

      <h1 style={{color:"red"}}>Coming Soon!</h1>

      <div>
        <h2> Motion Picture Flip Book </h2>
        <p> $TBD </p>
        <p>
          Want to relive the moment? Livinig memonto from your show featuring best show images
        </p>
      </div>

      <div>
        <h2> Prints </h2>
        <p> $TBD </p>
        <p>
          Want to take a piece of the magic home? Soon, prints will be available just for you!
        </p>
      </div>
      <div>
        <h2> Dichroic Looking Glass </h2>
        <p> $TBD </p>
        <p>
          Sundials, coasters that irradiate with suns rays.
        </p>
      </div>
      </ServicesContainer>
      <Footer/>
    </div>
  )
}

export default Services

const ServicesContainer = Styled.div
`margin-top: 100px;
color: white;
font-size: large
`
