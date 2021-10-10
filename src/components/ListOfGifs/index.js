import Gif from "../Gif"
import './ListOfGifs.css'
import Masonry from 'react-masonry-css'


export default function ListOfGifs ({gifs}) {

    const breakpoints = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    }

    return (
                <Masonry
                    breakpointCols={breakpoints}
                    className="ListOfGifs"
                    columnClassName="ListOfGifs-Column">
                    {
                        gifs.map(({id, title, url}) => 
                            <Gif
                                id={id}
                                key={id}
                                title={title}
                                url={url}
                            />
                        )
                    }
                </Masonry>
    )
}