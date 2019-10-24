import React from 'react'


export default function Profile(props) {
  return (
    <div>
      {/* <button className="home" onClick={props.goToHome}>Home</button> */}
      <div className="home" onClick={props.goToHome}>Home</div>
      {props.singleImg ?
        <div id='single-image'>
          <img className='profilePic' src={props.singleImg.hdurl} alt="pic" />
          <div className="text-area">
            <h2>{props.singleImg.title}</h2>
            <h2>{props.singleImg.date}</h2>
            <p>{props.singleImg.explanation}</p>
          </div>
        </div>
        :
        props.img.map(item => (
          <div id='single-image'>
            <div key={item.title}>
              <img className="profilePic" src={item.hdurl} alt="pic" />
              <div className="text-area">
                <h2>{item.title}</h2>
                <h2>{item.date}</h2>
                <p>{item.explanation}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}


