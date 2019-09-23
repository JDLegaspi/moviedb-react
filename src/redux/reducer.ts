import AppState, { initialAppState, Movie } from "./state";
import { Action } from "redux";

interface MovieInfo {
    poster_path?: string;
    release_date?: string;
    title?: string;
    vote_average?: number;
    id: number;
};

interface MovieDetails extends MovieInfo {
    runtime?: number;
    backdrop_path?: string;
    overview?: string;
}


const AppReducer = (state = initialAppState, action: any) => {
    switch (action.type) {
        case "RESET_MOVIE_STATE":
            state = {
                ...state,
                moviePageState: undefined
            }

            return state;

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
                    id: movieResponse.id !== undefined ? movieResponse.id : 0,
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

        case "FETCH_MOVIE_DETAILS_SUCCESS":
            let movieDetailsResponse: MovieDetails = action.payload.response;
            console.log("movieDetailsFromReducer", movieDetailsResponse);

            let movie: Movie = {
                id: movieDetailsResponse.id !== undefined ? movieDetailsResponse.id : 0,
                title: movieDetailsResponse.title !== undefined ? movieDetailsResponse.title : "",
                imageUrl: movieDetailsResponse.poster_path !== undefined ? "https://image.tmdb.org/t/p/original" + movieDetailsResponse.poster_path : "",
                releaseDate: movieDetailsResponse.release_date !== undefined ? movieDetailsResponse.release_date : "",
                rating: movieDetailsResponse.vote_average !== undefined ? movieDetailsResponse.vote_average : 0,

                backgroundUrl: movieDetailsResponse.backdrop_path !== undefined ? "https://image.tmdb.org/t/p/original" + movieDetailsResponse.backdrop_path : "",
                overview: movieDetailsResponse.overview !== undefined ? movieDetailsResponse.overview : "",
                runtime: movieDetailsResponse.runtime !== undefined ? movieDetailsResponse.runtime : 0,
            }

            state = {
                ...state,
                moviePageState: movie
            };

            return state;

        case "SEARCH_MOVIES_SUCCESS":
                let moviesFromSearchResponse: MovieInfo[] = action.payload.response.results;
                console.log("movies from reducer", moviesFromSearchResponse);

                let moviesSearch: Movie[] = [];

                for (let movieResponse of moviesFromSearchResponse) {
                    moviesSearch.push({
                        id: movieResponse.id !== undefined ? movieResponse.id : 0,
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


