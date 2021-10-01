import { useState } from "react";
import { useLocation } from "wouter";
import TrendingSearches from "components/TrendingSearches";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";


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
        <div className="App-Category">
            <TrendingSearches/>
        </div>
        </>
    )
}