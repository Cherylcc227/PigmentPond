import React from "react";
import {Link} from "react-router-dom";

const EnterSite = () => {
  return (
    <div>
      <header className="App-header">"PIGMENT POND"
       <Link to="/Home" style={{ textDecoration: 'none' , color: 'red', fontFamily: 'Roboto' }}>ENTER</Link>
      </header>
    </div>
  )
}

export default EnterSite