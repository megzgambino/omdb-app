import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getMovieDetail, cleanUp } from '../redux/actions/movieActions'

export default function Details() {
    const detailMovie = useSelector((state) => state.detailMovie)
    const loadingDetailMovie = useSelector((state) => state.loadingDetailMovie)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovieDetail(id))

    })

    useEffect(() => {
        return () => {
            dispatch(cleanUp)
        }
    // eslint-disable-next-line
    }, [])

    if (loadingDetailMovie) {
        return (
            <div>
                 <img src={'https://64.media.tumblr.com/695ce9a82c8974ccbbfc7cad40020c62/tumblr_o9c9rnRZNY1qbmm1co1_500.gif'} alt={''} class="mx-auto d-block"/>
            </div>
        )
    } else {
        return (
            <div>
                 <div class="container mt-5 mb-5">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-6 border-end">
                            <div class="d-flex flex-column justify-content-center">
                                <div class="main_image">
                                    <img
                                        src={detailMovie.Poster}
                                        alt={detailMovie.Title}
                                        style={{
                                            objectFit: 'fill',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3 right-side">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>{detailMovie.Title}</h3>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5>{detailMovie.Released}</h5>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p>Director: {detailMovie.Director}</p>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p>Actors: {detailMovie.Actors}</p>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p>Genre: {detailMovie.Genre}</p>
                                </div>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p>IMDB Rating: {detailMovie.Ratings[0].Value}</p>
                                </div>
                                <div class="buttons d-flex flex-row mt-5 gap-3">
                                    <Link to={'/'}>
                                        <button class="btn btn-dark">
                                            Back to Home
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
   
}
