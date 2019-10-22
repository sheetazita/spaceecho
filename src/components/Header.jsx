import React from 'react';
// import { Link } from 'react-router-dom';
import image from '../images/spaceechologo.png'

function Header(props) {
  return (
    <header>
      {/* <img id='logo' src={image} alt='' /> */}
      <div id="logo">SPACE ECHO</div>
      <p>DAILY SPACE NEWS TO KICK OFF</p>
      <form>
        <input type="text" placeholder="Search by date [example:2019-09-11]..."></input>
        <button>GET PHOTO</button>
      </form>
    </header>
  )
}

export default Header;