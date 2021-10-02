import React, { useEffect, useState } from 'react'
import Movies from '../components/Movies'
import { fetchMovies, cleanUp } from '../redux/actions/movieActions'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Homepage() {
    const movies = useSelector((state) => state.movies)
    const dispatch = useDispatch()
    const history = useHistory()
    const [movieSearch, setMovieSearch] = useState('')
    const [page, setPage] = useState()

    useEffect(() => {
        dispatch(fetchMovies())
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        return () => {
            dispatch(cleanUp())
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const params = new URLSearchParams()
        if (movieSearch) {
            params.append('title', movieSearch)
        } else {
            params.delete('title')
        }
        history.push({ search: params.toString() })
    }, [movieSearch, history])

    function onChangeHandler(movie) {
        setMovieSearch(movie.target.value)
    }

    function onClickHandler() {
        setPage(1)
        dispatch(fetchMovies(movieSearch, page))
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>

                                <div className="col">
                                    <input
                                        onChange={(movie) =>
                                            onChangeHandler(movie)
                                        }
                                        className="form-control form-control-lg form-control-borderless"
                                        type="search"
                                        placeholder="Search movies here"
                                    />
                                </div>

                                <div className="col-auto">
                                    <button
                                        onClick={() => onClickHandler()}
                                        className="btn btn-lg btn-success"
                                        type="button"
                                    >
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <InfiniteScroll
                    dataLength={movies.length}
                    next={() => setPage(page+1)}
                    hasMore={true}
                >
                    <div className="row g-2">
                        {movies.map((movie) => {
                            return <Movies movie={movie} key={movie.imdbID} />
                        })}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}
