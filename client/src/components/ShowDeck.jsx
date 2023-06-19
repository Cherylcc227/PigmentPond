import React from "react";
import Masthead from "./Masthead.jsx";
import Footer from "./Footer.jsx";

const ShowDeck = () => {
  return (
    <div>
      <Masthead/>

      <h1 style={{color: "red"}}> Upcoming Shows </h1>
        <li>Temples, June 19</li>
        <li>Human Barbie, June 20</li>
        <li>WonderJam Festival, August 5</li>
      <br/>
      <h1 style={{color: "gray"}}> Past Collabs (still compiling)</h1>
        <li> Magnolia Grove </li>
        <li> Maybe Fern </li>
        <li> Riding Carpets </li>
        <li> Lounge Drugs </li>
        <li> Crooked Rugs </li>
        <li> Dryice </li>
        <li> Salads & Sunbeams </li>
        <li> Desert Atlas </li>
        <li> Sour Magic </li>
        <li> Charmer </li>
        <li> Yard Art </li>
        <li> Welcome Back Band </li>
        <li> Totem Pocket </li>
        <li> Aaron Doley </li>
        <li> Osmium House </li>
        <li> Dreamspace Database </li>
        <li> Kikagakamoto </li>
        <li> Sunkan Signals </li>
        <li> Sponsered Content </li>
        <li> Fly Amanita </li>
        <li> Ploom </li>
        <li> Djunah </li>
        <li> Lovegang </li>
        <li> Megatheria </li>
        <br/>
        <Footer/>
    </div>
  )
}

export default ShowDeck