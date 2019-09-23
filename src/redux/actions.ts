import dispatch, { ThunkAction } from "redux-thunk";
import { Dispatch, ActionCreator, AnyAction, Action } from "redux";

const apiKey = "6ed12e064b90ae1290fa326ce9e790ff";
const apiUrl = "https://api.themoviedb.org/3/";
const popularMoviesEndpoint = apiUrl + "movie/popular";
const searchMoviesEndpoint = apiUrl + "search/movie";
const fetchMovieDetilsEndpoint = apiUrl + "movie";

const ResetMovieState = () => {
    return {
        type: 'RESET_MOVIE_STATE',
    }
};

// FETCH_POPULAR_MOVIES start

const FetchPopularMoviesStarted = (searchInput?: string) => {
    return {
        type: 'FETCH_POPULAR_MOVIES_STARTED',
    }
};

const FetchPopularMoviesFailed = () => {
    return {
        type: 'FETCH_POPULAR_MOVIES_FAILED',
    }
};

const FetchPopularMoviesSuccess = (response: Response) => {
    return {
        type: 'FETCH_POPULAR_MOVIES_SUCCESS',
        payload: {response: response}
    }
};

// FETCH_POPULAR_MOVIES end

// SEARCH_MOVIES start

const SearchMoviesStarted = (searchInput?: string) => {
    return {
        type: 'SEARCH_MOVIES_STARTED',
    }
};

const SearchMoviesFailed = () => {
    return {
        type: 'SEARCH_MOVIES_FAILED',
    }
};

const SearchMoviesSuccess = (response: Response) => {
    return {
        type: 'SEARCH_MOVIES_SUCCESS',
        payload: {response: response}
    }
};

// SEARCH_MOVIES end


const FetchMovieDetailsStarted = (searchInput?: string) => {
    return {
        type: 'FETCH_MOVIE_DETAILS_STARTED',
    }
};

const FetchMovieDetailsFailed = () => {
    return {
        type: 'FETCH_MOVIE_DETAILS_FAILED',
    }
};

const FetchMovieDetailsSuccess = (response: Response) => {
    return {
        type: 'FETCH_MOVIE_DETAILS_SUCCESS',
        payload: {response: response}
    }
};

// SEARCH_MOVIES end

// ASYNC ACTIONS start
const FetchPopularMovies: ActionCreator<ThunkAction<Promise<{type: string}>, null, null, AnyAction>> = () => {
    return dispatch => {
        dispatch(FetchPopularMoviesStarted());

        return fetch(`${popularMoviesEndpoint}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(responseBody => dispatch(FetchPopularMoviesSuccess(responseBody)))
            .catch(err => dispatch(FetchPopularMoviesFailed()));
    };
};

const SearchMovies: ActionCreator<ThunkAction<Promise<{type: string}>, null, null, AnyAction>> = (searchQuery?: string) => {
    return dispatch => {
        dispatch(SearchMoviesStarted());

        return fetch(`${searchMoviesEndpoint}?api_key=${apiKey}&query=${searchQuery}`)
            .then(response => response.json())
            .then(responseBody => dispatch(SearchMoviesSuccess(responseBody)))
            .catch(err => dispatch(SearchMoviesFailed()));
    };
};

const FetchMovieDetails: ActionCreator<ThunkAction<Promise<{type: string}>, null, null, AnyAction>> = (movieId: string) => {
    return dispatch => {
        dispatch(FetchMovieDetailsStarted());

        return fetch(`${fetchMovieDetilsEndpoint}/${movieId}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(responseBody => dispatch(FetchMovieDetailsSuccess(responseBody)))
            .catch(err => dispatch(FetchMovieDetailsFailed()));
    };
};

// ASYNC ACTIONS end

export {
    ResetMovieState,
    FetchPopularMovies, FetchPopularMoviesStarted, FetchPopularMoviesSuccess, FetchPopularMoviesFailed,
    SearchMovies, SearchMoviesStarted, SearchMoviesSuccess, SearchMoviesFailed,
    FetchMovieDetails, FetchMovieDetailsStarted, FetchMovieDetailsSuccess, FetchMovieDetailsFailed
}
