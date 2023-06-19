import React from "react";
import Masthead from "./Masthead.jsx";
import Cervantes2023 from "../images/Cervantes2023.jpg";
import YMH2023 from "../images/YMH2023.jpg";
import Styled from "styled-components";
import Footer from "./Footer.jsx";

const Gallery = () => {
  return (
    <div>
      <Masthead/>
      <h1 style={{color:"aqua"}}> Liquid Light Shows </h1>
      <ShowPhotos>
        <img
        src={Cervantes2023}
        alt=""
        width="600"
        height="400"
        />
        <img
        src={YMH2023}
        alt=""
        width="600"
        height="400"
        />
      </ShowPhotos>

      <div>
        <h1 style={{color:"aqua"}}> VHS Footage </h1>
        <VideoContainer>
        <iframe
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          width="600"
          height="300"
          src="https://www.youtube.com/embed/dtoKgtIRmLE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />

        <iframe
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          width="600"
          height="300"
          src="https://www.youtube.com/embed/5G3DpzeTHfA"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        <iframe
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          width="600"
          height="300"
          src="https://www.youtube.com/embed/HEpFsVNFz7w"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
        </VideoContainer>

      </div>
      <Footer/>
    </div>
  )
}

export default Gallery

const ShowPhotos = Styled.div
`
margin-top: 20px;
display: flex;
gap: 20px;
justify-content: center;
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

const VideoContainer = Styled.div
`
display: flex;
gap: 10px;
justify-content: center;
margin-bottom: 50px;
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



