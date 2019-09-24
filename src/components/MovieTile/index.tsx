import React from 'react';
import "./index.scss";
import { monthNames, missingImage } from '../../constants';
import { placeholder } from '@babel/types';

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

    //outputs high medium or low depending on rating quality
    //low: 0-33, med: 33-66, high: 66-100
    getRatingQuality(rating: number) {
        let quality = ["low", "medium", "high"];
        return quality[Math.trunc(rating / 33)];
    }

    //callback when movie image has been clicked
    //home page uses this to route to movie page
    handleMovieClick() {
        if (this.props.onMovieClick !== undefined) this.props.onMovieClick(this.props.id);
    }

    //converts "21-3-2019" to "March 2019"
    convertDateString(dateString: string): string {
        let date = new Date(dateString);

        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    }

    render() {
        let ratingPercentage = this.props.rating ? this.props.rating * 10 : undefined;
        let ratingClasses: string[] = ["movie-tile-rating", ratingPercentage ? "rating-" + this.getRatingQuality(ratingPercentage) : ""]

        //use original image or placeholder if not found
        let movieImg = this.props.imageUrl !== missingImage ? this.props.imageUrl : placeholder

        return (
            <div className="movie-tile-wrapper">
                <div
                    className="movie-tile-img"
                    style={{backgroundImage: `url(${movieImg})`}}
                    onClick={this.handleMovieClick}
                >
                    {ratingPercentage && <div className={ratingClasses.join(" ")}><span>{ratingPercentage}%</span></div>}
                </div>
                <div className="movie-tile-info">
                    <p className="movie-tile-title">{this.props.title}</p>
                    <p className="movie-tile-release-date">{this.convertDateString(this.props.releaseDate)}</p>
                </div>
            </div>
        );
    }
}

export default MovieTile;