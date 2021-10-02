const initialState = {
    movies : [],
    detailMovie : {},
    loadingAllMovies : true,
    loadingDetailMovie : true
}


function reducer (state = initialState, action) {
    switch(action.type) {
        case 'FETCH_MOVIES':
            return {...state, movies : action.payload}
        case 'GET_MOVIE_DETAIL':
            return {...state, detailMovie : action.payload}
        case 'FINISH_LOADING_FETCH_MOVIES':
            return {...state, loadingAllMovies : false}
        case 'FINISH_LOADING_DETAIL_MOVIE':
            return {...state, loadingDetailMovie : false}
        case 'CLEAN_UP' :
            return initialState
        default :
            return state
    }
}

export default reducer