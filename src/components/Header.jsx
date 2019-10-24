import React from 'react';


function Header(props) {
  return (
    <header>
      {/* <img id='logo' src={image} alt='' /> */}
      <div id="logo">SPACE ECHO</div>
      <h1>DAILY SPACE PHOTOS TO KICK OFF</h1>

      <input onChange={props.handleChange} type="text" placeholder="Search by date [example:2019-09-11]..."></input>
      <button onClick={props.handleSubmit}>GET PHOTO</button>

    </header>
  )
}

export default Header;