import React, { useState } from "react"
import { useLocation } from "wouter"

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm ({ initialKeyword = '', initialRating = ''}) {
    const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
    const [rating, setRating] = useState(initialRating)
    const [path, pushLocation] = useLocation() //eslint-disable-line
    
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = (evt) => {
        setRating(evt.target.value)
    }

    return (
      <form onSubmit={handleSubmit}>
        <button>Buscar</button>
        <input
          placeholder="Busca un gif aquí..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <select onChange={handleChangeRating} value={rating}>
          <option disabled>Rating type</option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
      </form>
    );
}
