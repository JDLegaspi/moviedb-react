import React from 'react';
import "./index.scss";
import MovieTile, { MovieTileProps } from '../MovieTile';

export interface MovieListProps {
    movieList?: MovieTileProps[];
    onMovieClick?: (movieId: number) => void;
    loading?: boolean;
}

class MovieList extends React.Component<MovieListProps> {
    render() {
        return (
            <div className="movie-list">
                {this.props.movieList && this.props.movieList.length > 0 && this.props.movieList.map(movie => {
                    return (
                        <div className="movie-list-movie-wrapper" key={movie.id}>
                            <MovieTile {...movie} onMovieClick={this.props.onMovieClick} />
                        </div>
                    )
                })}
                {this.props.movieList && this.props.movieList.length === 0 &&
                    (this.props.loading ? <p>Loading...</p> : <p>Could not find movies under this search query. Please try another query.</p>

                    )
                }
            </div>
        );
    }
}

export default MovieList;