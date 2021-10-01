import { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = ["Messi", "South Park", "Simpsons", "Rick&Morty"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
         <button>Buscar</button>
            <input placeholder="Busca un gif aquí..." onChange={handleChange} type="text" value={keyword}/>
        </form>
        <h3 className="App-title">Última búsqueda</h3>
        <ListOfGifs gifs={gifs}/>
        <h3 className="App-title">Gif más populares</h3>
        <ul>
            {POPULAR_GIFS.map((popularGif) => (
                <li key={popularGif}>
                    <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}