import React from 'react';
import "./index.scss";

export interface MovieTileProps {
    title: string;
    releaseDate: string;
    rating: number;
    imageUrl: string;
}

class MovieTile extends React.Component<MovieTileProps> {
    constructor(props: MovieTileProps) {
        super(props);
    }
}

export default MovieTile;