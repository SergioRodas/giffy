import { useLocation } from "wouter";
import TrendingSearches from "components/TrendingSearches";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import SearchForm from "components/SearchForm";
import { useCallback } from "react";


export default function Home() {
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
        <SearchForm onSubmit={handleSubmit}/>
        <h3 className="App-title">Última búsqueda</h3>
        <ListOfGifs gifs={gifs}/>
        <h3 className="App-title">Gif más populares</h3>
        <div className="App-Category">
            <TrendingSearches/>
        </div>
        </>
    )
}