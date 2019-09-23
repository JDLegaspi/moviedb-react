import React from 'react';
import "./index.scss";
import { connect } from 'react-redux';
import AppState, { HomeState, Movie } from '../../redux/state';
import { FetchMovieDetails } from '../../redux/actions';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router';

export type MoviePageProps = MoviePageOwnProps & RouteComponentProps<{ movieId: string }>;

interface MoviePageOwnProps {
    moviePageState?: Movie;
    fetchMovieDetails?: (movieId: string) => void;
}

export function mapStateToProps(state: AppState): MoviePageOwnProps {
    return state;
}

export function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        fetchMovieDetails: (movieId: string) => dispatch(FetchMovieDetails(movieId))
    }
}

class MoviePage extends React.Component<MoviePageProps> {
    constructor(props: MoviePageProps) {
        super(props);

        this.backToHome = this.backToHome.bind(this);
    }

    componentDidMount() {
        if (this.props.fetchMovieDetails !== undefined) this.props.fetchMovieDetails(this.props.match.params.movieId);
    }

    convertMinutesToHours(totalMinutes: number): string {
        var hours = Math.floor(totalMinutes / 60);
        var minutes = totalMinutes % 60;

        return `${hours}h ${minutes} min`;
    }

    backToHome() {
        this.props.history.goBack();
    }

    render() {
        if (this.props.moviePageState === undefined) return <div />;

        let posterUrlPath = this.props.moviePageState && this.props.moviePageState.imageUrl;
        let backgroundUrlPath = this.props.moviePageState && this.props.moviePageState.backgroundUrl;

        let releaseYear = new Date(this.props.moviePageState.releaseDate).getFullYear();

        let backButton = (
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0435 8.34868V10.6513H4.64837L10.3215 17.2303L8.89131 18.875L0.739136 9.5L8.89131 0.125L10.3692 1.76974L4.64837 8.34868H17.0435Z" fill="white"/>
            </svg>
        );

        return (
            <div className="movie-page-wrapper">
                <div className="movie-page-header" style={{backgroundImage: `url(${backgroundUrlPath})`}}>
                    <div id="movie-page-back" onClick={this.backToHome}>{backButton}</div>
                </div>
                <div className="movie-page-title-wrapper content-wrapper">
                    <div className="movie-page-img-wrapper">
                        <div className="movie-page-movie-tile-img" style={{backgroundImage: `url(${posterUrlPath})`}} />
                    </div>
                    <div className="movie-page-title-info-wrapper">
                        <h1>{this.props.moviePageState ? this.props.moviePageState.title : ""}</h1>
                        <p>{this.props.moviePageState && this.props.moviePageState.rating ? `${releaseYear} ${String.fromCharCode(183)} ${this.props.moviePageState.rating * 10}% User Score` : "" }</p>
                        <p>{this.props.moviePageState && this.props.moviePageState.runtime ? this.convertMinutesToHours(this.props.moviePageState.runtime) : ""}</p>
                    </div>
                </div>
                <div className="movie-page-overview content-wrapper">
                    <h2>Overview</h2>
                    <p>{this.props.moviePageState ? this.props.moviePageState.overview : ""}</p>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);