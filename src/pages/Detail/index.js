import { useContext } from "react"
import Gif from "../../components/Gif"
import GifsContext from "../../context/GifsContext"

export default function Detail ({ params }) {
    const {gifs} = useContext(GifsContext)
    console.log(gifs) 

    const gif = gifs.find(singleGif => 
        singleGif.id === params.id
    )
    console.log(gif)
    
    return <Gif {...gif}></Gif>
}