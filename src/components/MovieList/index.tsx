import React from 'react';
import "./index.scss";
import MovieTile, { MovieTileProps } from '../MovieTile';

export interface MovileListProps {
    movieList?: MovieTileProps[];
}

class MovileList extends React.Component<MovileListProps> {
    constructor(props: MovileListProps) {
        super(props);
    }

    render() {
        console.log(this.props.movieList);
        return (
            <div className="movie-list">
                {this.props.movieList && this.props.movieList.map(movie => {
                    return <MovieTile {...movie} />
                })}
            </div>
        );
    }
}

export default MovileList;