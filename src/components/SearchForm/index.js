import React, { useState } from "react"
import { useLocation } from "wouter"

function SearchForm ({ onSubmit }) {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    return (
        <form onSubmit={handleSubmit}>
         <button>Buscar</button>
            <input placeholder="Busca un gif aquí..." onChange={handleChange} type="text" value={keyword}/>
        </form>
    )
}

export default React.memo(SearchForm)