import dispatch, { ThunkAction } from "redux-thunk";
import { Dispatch, ActionCreator, AnyAction, Action } from "redux";

const apiKey = "6ed12e064b90ae1290fa326ce9e790ff";
const apiUrl = "https://api.themoviedb.org/3/";
const popularMoviesEndpoint = apiUrl + "movie/popular";

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

const FetchPopularMovies: ActionCreator<ThunkAction<Promise<{type: string}>, null, null, AnyAction>> = () => {
    return dispatch => {
        dispatch(FetchPopularMoviesStarted());

        return fetch(`${popularMoviesEndpoint}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(responseBody => dispatch(FetchPopularMoviesSuccess(responseBody)))
            .catch(err => dispatch(FetchPopularMoviesFailed()));
    };
};

export { FetchPopularMovies, FetchPopularMoviesStarted, FetchPopularMoviesSuccess }
