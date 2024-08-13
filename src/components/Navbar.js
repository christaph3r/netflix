import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="header">
    <div className="container-nav">
      <div className="menubar">
       <Link to="/"> <img
          src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"
          style={{ width: "122px" }}
          alt=""
        /></Link>
       <Link to="/upcoming" style={{textDecoration:"none", color:"white"}}><span>Upcoming</span></Link> 
       <Link to="/top_rated" style={{textDecoration:"none",color:"white"}}><span>Top rated</span></Link>
       <Link to="/Action" style={{textDecoration:"none",color:"white"}}><span>Popular</span></Link>
      </div>
      <div className="button-container" >
        <button className="sign-in">sign in</button>
        <button className="sign-up">sign up</button>
      </div>
    </div>
    </div>
  );
}

export default Navbar;
