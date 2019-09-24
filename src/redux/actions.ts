import { ThunkAction } from "redux-thunk";
import { ActionCreator, AnyAction } from "redux";
import { popularMoviesEndpoint, apiKey, searchMoviesEndpoint, fetchMovieDetilsEndpoint } from "../constants";

const ResetMovieState = () => {
    return {
        type: 'RESET_MOVIE_STATE',
    }
};

// FETCH_POPULAR_MOVIES start

const FetchPopularMoviesStarted = () => {
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

const SearchMoviesStarted = () => {
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


const FetchMovieDetailsStarted = () => {
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

//fetches most popular movies currently
const FetchPopularMovies: ActionCreator<ThunkAction<Promise<{type: string}>, null, null, AnyAction>> = () => {
    return dispatch => {
        dispatch(FetchPopularMoviesStarted());

        return fetch(`${popularMoviesEndpoint}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(responseBody => dispatch(FetchPopularMoviesSuccess(responseBody)))
            .catch(err => dispatch(FetchPopularMoviesFailed()));
    };
};

//searches for movies based on search query
const SearchMovies: ActionCreator<ThunkAction<Promise<{type: string}>, null, null, AnyAction>> = (searchQuery?: string) => {
    return dispatch => {
        dispatch(SearchMoviesStarted());

        return fetch(`${searchMoviesEndpoint}?api_key=${apiKey}&query=${searchQuery}`)
            .then(response => response.json())
            .then(responseBody => dispatch(SearchMoviesSuccess(responseBody)))
            .catch(err => dispatch(SearchMoviesFailed()));
    };
};

//fetches details of a movie by id
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
