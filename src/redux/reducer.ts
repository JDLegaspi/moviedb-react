import AppState, { initialAppState, Movie } from "./state";
import { Action } from "redux";

interface MovieInfo {
    poster_path?: string;
    release_date?: string;
    title?: string;
    vote_average?: number;
};


const AppReducer = (state = initialAppState, action: any) => {
    switch (action.type) {
        case "FETCH_POPULAR_MOVIES_STARTED":
            state = {
                ...state,
                homeState: {
                    loading: true
                }
            }

            return state;

        case "FETCH_POPULAR_MOVIES_SUCCESS":
            let moviesFromResponse: MovieInfo[] = action.payload.response.results;
            console.log("movies from reducer", moviesFromResponse);

            let movies: Movie[] = [];

            for (let movieResponse of moviesFromResponse) {
                movies.push({
                    title: movieResponse.title !== undefined ? movieResponse.title : "",
                    imageUrl: movieResponse.poster_path !== undefined ? "https://image.tmdb.org/t/p/original" + movieResponse.poster_path : "",
                    releaseDate: movieResponse.release_date !== undefined ? movieResponse.release_date : "",
                    rating: movieResponse.vote_average !== undefined ? movieResponse.vote_average : 0
                })
            }

            state = {
                ...state,
                homeState: {
                    loading: true,
                    movies: movies
                }
            }

            return state;

        case "SEARCH_MOVIES_SUCCESS":
                let moviesFromSearchResponse: MovieInfo[] = action.payload.response.results;
                console.log("movies from reducer", moviesFromSearchResponse);

                let moviesSearch: Movie[] = [];

                for (let movieResponse of moviesFromSearchResponse) {
                    moviesSearch.push({
                        title: movieResponse.title !== undefined ? movieResponse.title : "",
                        imageUrl: movieResponse.poster_path !== undefined ? "https://image.tmdb.org/t/p/original" + movieResponse.poster_path : "",
                        releaseDate: movieResponse.release_date !== undefined ? movieResponse.release_date : "",
                        rating: movieResponse.vote_average !== undefined ? movieResponse.vote_average : 0
                    })
                }

                state = {
                    ...state,
                    homeState: {
                        loading: true,
                        movies: moviesSearch
                    }
                }

                return state;

        default:
            return state;
    }
};

export default AppReducer;


