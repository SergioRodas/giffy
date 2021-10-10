import { useLocation } from "wouter";
import TrendingSearches from "components/TrendingSearches";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import SearchForm from "components/SearchForm";
import { useCallback } from "react";


export default function Home() {
    const [path, pushLocation] = useLocation() //eslint-disable-line

    const {loading, gifs} = useGifs() //eslint-disable-line

    const handleSubmit = useCallback(({keyword}) => {
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
        <SearchForm onSubmit={handleSubmit}/>
        <div className="App-main">
            <div className="App-results">
                <h3 className="App-title">Última búsqueda</h3>
                <ListOfGifs gifs={gifs}/>
            </div>
            <div className="App-Category">
                <TrendingSearches/>
            </div>
        </div>
        </>
    )
}