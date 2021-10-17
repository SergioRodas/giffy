import React from 'react'
import {Link} from 'wouter'
import './Gif.css'

function Gif ({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/gif/${id}`} className='Gif-link'>
        <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>

  )
}

export default React.memo(Gif)