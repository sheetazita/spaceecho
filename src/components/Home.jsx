import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <div id="gif-display">
        {
          props.gifs.map(gif => (
              <img className="gif-images" src={gif.images.fixed_width.url} alt="gifs" />

          ))
        }
      </div>
      <div className="imgContainer">
        {
          props.img.map(img => (
            <Link to={`/${img.title}`} key="title">
              <img className="space-img" src={img.url} alt="spaceimg" />
              <h3>{img.title}</h3>
             </Link>            
          ))
        }
      </div>
    </div>
  )
}

export default Home;