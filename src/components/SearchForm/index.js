import { useLocation } from "wouter"
import useForm from "./hook"
import css from "./SearchForm.module.css"

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearchForm ({ initialKeyword = '', initialRating = ''}) {

    const { keyword, rating, times, updateKeyword, updateRating } = useForm({
      initialKeyword,
      initialRating,
    })

    const [path, pushLocation] = useLocation() //eslint-disable-line

    const handleChange = evt => {
        updateKeyword(evt.target.value)
        
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        // navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)
    }

    return (
      <>
      <form onSubmit={handleSubmit} className={css["c-search"]}>
        <button className={css["c-search-btn"]}>Buscar</button>
        <input
          className={css["c-search-input"]}
          placeholder="Search a gif here..."
          onChange={handleChange}
          type="text"
          value={keyword}
        />
        <select value={rating} onChange={handleChangeRating}>
          <option disabled>
            Rating:
          </option>
          {RATINGS.map((rating) => (
            <option key={rating}>{rating}</option>
          ))}
        </select>
        <small className={css["Search-times"]}>{times}</small>
      </form>
    </>
    )
}
