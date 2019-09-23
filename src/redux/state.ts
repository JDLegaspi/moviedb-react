import { MovieTileProps } from "../components/MovieTile";

export interface Movie extends MovieTileProps {
    backgroundUrl?: string;
    overview?: string;
    runtime?: number;
}

interface AppState {
    homeState?: HomeState;
    moviePageState?: Movie;
}

export interface HomeState {
    movies?: Movie[];
    loading: boolean;
}

const initialAppState: AppState = {
    homeState: {
        movies: [],
        loading: false
    }
};

export default AppState;
export { initialAppState };
