import Gif from "components/Gif"
import Spinner from "components/Spinner"
import useSingleGif from "hooks/useSingleGif"
import { Helmet } from 'react-helmet'
import { Redirect } from "wouter"

export default function Detail ({ params }) {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})
  const title = gif ? gif.title : ''

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }

  if (isError) return <Redirect to='/404' />
  if (!gif) return null

  return <>
      <Helmet>
        <title className="App-title-head">{title.charAt(0).toUpperCase() + title.slice(1)} || Giffy</title>
      </Helmet>
      <h3 className="App-title-detail">{gif.title}</h3>
      <div className="Gif-detail">
      <Gif {...gif} />
      </div>
    </>
}