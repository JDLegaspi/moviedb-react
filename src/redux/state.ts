import { MovieTileProps } from "../components/MovieTile";

export interface Movie extends MovieTileProps {
    backgroundUrl?: string;
    overview?: string;
}

interface AppState {
    homeState?: HomeState;
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
