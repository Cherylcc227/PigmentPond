import React from "react";
import Masthead from "./Masthead.jsx";
import Footer from "./Footer.jsx";

const ShowDeck = () => {
  return (
    <div>
      <Masthead/>

      <h1 style={{color: "red", fontSize: "80px"}}> Upcoming Shows </h1>
      <h2 style={{color: "red", fontSize: "50px", fontStyle: "italic"}}> Updated every Friday </h2>
        <p style={{fontSize: "50px"}}>WonderJam Festival <br/> August 5 <br/> WonderLand Brewery <br/> Westminster</p>
      <br/>
      <h1 style={{color: "gray"}}> Past Collabs (still compiling)</h1>
        <li> Human Barbie </li>
        <li> Temples </li>
        <li> Magnolia Grove </li>
        <li> May Be Fern </li>
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