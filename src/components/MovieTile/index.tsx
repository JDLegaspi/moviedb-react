import React from 'react';
import "./index.scss";

export interface MovieTileProps {
    id: number;
    title: string;
    releaseDate: string;
    rating?: number;
    imageUrl: string;
    onMovieClick?: (movieId: number) => void;
}

class MovieTile extends React.Component<MovieTileProps> {
    constructor(props: MovieTileProps) {
        super(props);

        this.handleMovieClick = this.handleMovieClick.bind(this);
    }

    getRatingQuality(rating: number) {
        let quality = ["low", "medium", "high"];
        return quality[Math.trunc(rating / 33)];
    }

    handleMovieClick() {
        if (this.props.onMovieClick !== undefined) this.props.onMovieClick(this.props.id);
    }

    render() {
        let ratingPercentage = this.props.rating ? this.props.rating * 10 : undefined;
        let ratingClasses: string[] = ["movie-tile-rating", ratingPercentage ? "rating-" + this.getRatingQuality(ratingPercentage) : ""]

        return (
            <div className="movie-tile-wrapper">
                <div
                    className="movie-tile-img"
                    style={{backgroundImage: `url(${this.props.imageUrl})`}}
                    onClick={this.handleMovieClick}
                >
                    {this.props.rating && <div className={ratingClasses.join(" ")}><span>{ratingPercentage}%</span></div>}
                </div>
                <div className="movie-tile-info">
                    <p className="movie-tile-title">{this.props.title}</p>
                    <p className="movie-tile-release-date">{this.props.releaseDate}</p>
                </div>
            </div>
        );
    }
}

export default MovieTile;