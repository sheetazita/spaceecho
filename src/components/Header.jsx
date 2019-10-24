import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
  return (
    <header>
      {/* <img id='logo' src={image} alt='' /> */}
      <Link to="/"><div id="logo">SPACE ECHO</div></Link>
      <h1>DAILY SPACE PHOTOS TO KICK OFF</h1>

      <input onChange={props.handleChange} type="text" placeholder="Type any dates to get awesome space photo: 2019-09-11"></input>
      <Link to={"/Profile"}><button onClick={props.handleSubmit}>GET PHOTO</button></Link>

    </header>
  )
}

export default Header;