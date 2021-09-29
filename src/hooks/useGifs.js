import { useEffect, useState } from "react"
import getGifs from "../services/getGifs"

export function useGifs ({ keyword } = { keyword:null}) {
    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])
    
     useEffect(function () {
      setLoading(true)
      // Recuperamos la keyword del localStorage
      const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword') || 'monos'

      getGifs({ keyword: keywordToUse })
        .then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        // Guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
    }, [keyword])

    return {loading, gifs}
}