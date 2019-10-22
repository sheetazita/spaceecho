import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Profile(props) {
  return (
    <div>
      {props.img.map(item => (
        <div key={item.title}>
          <img className="profilePic" src={item.hdurl}/>
          <p>{item.title}</p>
        </div>
      ))}
      <Link to='/'><button>Home</button></Link>
    </div>
  )
}

