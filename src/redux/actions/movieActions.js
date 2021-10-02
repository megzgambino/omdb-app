import axios from 'axios'

export const fetchMovies = (query, page) => (dispatch) => {
    console.log(page)
    if (query && page) {
        axios({
            method: 'GET',
            url: `https://www.omdbapi.com/?apikey=9a317034&s=${query}&page=${page}`
        })
        .then(({ data }) => {
            // console.log(data)
            dispatch({
                type: 'FETCH_MOVIES',
                payload: data.Search,
            })
        })
        .catch((err) => console.log(err))
        .finally(() => {
            dispatch({
                type: 'FINISH_LOADING_FETCH_MOVIES'
            })
        })

    } 
    
}

export const getMovieDetail = (imdbID) => (dispatch) => {
    axios({
        method: 'GET',
        url: `https://www.omdbapi.com/?apikey=9a317034&i=${imdbID}`
    })
        .then(({data}) => {
            dispatch({
                type: 'GET_MOVIE_DETAIL',
                payload: data
            })
        })
        .catch(err => console.log(err))
        .finally(() => {
            dispatch({
                type: 'FINISH_LOADING_DETAIL_MOVIE'
            })
        })

}

export const cleanUp = () => (dispatch) => {
    dispatch({type: 'CLEAN_UP'})
}
