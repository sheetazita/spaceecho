import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Profile(props) {
  return (
    <div>
            <Link to='/'><button className="home">Home</button></Link>
      {props.img.map(item => (
        <div key={item.title}>
          <img className="profilePic" src={item.hdurl}/>
          {/* <h3>{item.title}</h3> */}
        </div>
      ))}

    </div>
  )
}

