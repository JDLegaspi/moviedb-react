import React from 'react';
import "./index.scss";
import MovieTile, { MovieTileProps } from '../MovieTile';

export interface MovieListProps {
    movieList?: MovieTileProps[];
    onMovieClick?: (movieId: number) => void;
}

class MovieList extends React.Component<MovieListProps> {
    constructor(props: MovieListProps) {
        super(props);
    }

    render() {
        console.log(this.props.movieList);
        return (
            <div className="movie-list">
                {this.props.movieList && this.props.movieList.map(movie => {
                    return (
                        <div className="movie-list-movie-wrapper">
                            <MovieTile {...movie} onMovieClick={this.props.onMovieClick} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MovieList;