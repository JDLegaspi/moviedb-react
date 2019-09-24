import React from 'react';
import "./index.scss";
import SearchInput from '../../components/SearchInput';
import MovieList from '../../components/MovieList';
import { connect } from 'react-redux';
import AppState, { HomeState } from '../../redux/state';
import { FetchPopularMovies, SearchMovies, ResetMovieState } from '../../redux/actions';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps } from 'react-router-dom';

type HomeProps = HomeOwnProps & RouteComponentProps<{}>;

interface HomeOwnProps {
    homeState?: HomeState;
    fetchPopularMovies?: (searchKey?: string) => void;
    searchMovies?: (searchKey?: string) => void;
    resetMoviePageState?: () => void;
}

export function mapStateToProps(state: AppState): HomeOwnProps {
    return state;
}

export function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        fetchPopularMovies: () => dispatch(FetchPopularMovies()),
        searchMovies: (searchKey?: string) => dispatch(SearchMovies(searchKey)),
        resetMoviePageState: () => dispatch(ResetMovieState())
    }
}

class Home extends React.Component<HomeProps> {
    constructor(props: HomeProps) {
        super(props);

        this.searchMovies = this.searchMovies.bind(this);
        this.handleMovieClick = this.handleMovieClick.bind(this);
    }

    componentDidMount() {
        if (this.props.fetchPopularMovies !== undefined) this.props.fetchPopularMovies();
    }

    //if no query is found, just get back popular movies
    searchMovies(searchQuery?: string) {
        if (this.props.searchMovies === undefined) return;

        if (searchQuery !== undefined && searchQuery.trim() !== "") {
            this.props.searchMovies(searchQuery);
        } else {
            if (this.props.fetchPopularMovies !== undefined) this.props.fetchPopularMovies();
        }
    }

    //route to movies page
    handleMovieClick(movieId?: number) {
        if (this.props.resetMoviePageState !== undefined) this.props.resetMoviePageState();
        this.props.history.push(`/movie/${movieId}`);
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-header">
                    <div className="home-header-images">
                        {randomRectanglesSvgLeft}
                        {logoSvg}
                        {randomRectanglesSvgRight}
                    </div>
                    <SearchInput
                        onSearch={this.searchMovies}
                    />
                </div>
                <div className="home-movies-outer-wrapper">
                    <div className="home-movies-inner-wrapper">
                        <h1>Popular Movies</h1>
                        <MovieList
                            movieList={this.props.homeState && this.props.homeState.movies}
                            onMovieClick={this.handleMovieClick}
                            loading={this.props.homeState && this.props.homeState.loading}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

// SVGs for header are below

const logoSvg = (
    <svg width="66" height="59" viewBox="0 0 66 59" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M59.5715 55.1419C63.4055 55.1419 66 52.5257 66 48.6596V6.48229C66 2.61622 63.4055 0 59.5715 0H6.42852C2.59452 0 0 2.61622 0 6.48229V59L3.29829 55.1445V6.48229C3.30118 4.74027 4.70094 3.3288 6.42852 3.32588H59.5715C61.2991 3.3288 62.6988 4.74027 62.7017 6.48229V48.6596C62.6988 50.4016 61.2991 51.8131 59.5715 51.816H11.3208L8.02252 55.1419L8.00151 55.1154" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M16.1404 20H17.8596V12.7891H20V11H14V12.7891H16.1404V20Z" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M26.2843 20H28V11H26.2843V14.599H23.7157V11H22V20H23.7157V16.3984H26.2843V20Z" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M35 18.1979H31.7401V16.3984H34.5243V14.599H31.7401V12.7995H34.8523V11H30V20H35V18.1979Z" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.0063 26.8922L14.5612 23H14V32H15.7716V27.0531L18.0063 29.4333L20.241 27.0531L20.2309 32H22V23H21.4514L18.0063 26.8922Z" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M28.5 23C22.5 23 22.5 32 28.5 32C34.5 32 34.5 23 28.5 23ZM28.5 30.1935C25.0126 30.1935 25.0126 24.7965 28.5 24.7965C31.9874 24.7965 31.9874 30.1935 28.5 30.1935Z" fill="#01D277" />
        <rect x="43" y="23" width="2" height="9" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M48.7385 30.2V28.4H51.524V26.6H48.7385V24.8H51.8522V23H47V32H52V30.2H48.7385Z" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M14 35H16.6163C22.4612 35 22.4612 44 16.6163 44H14V35ZM15.756 42.2H16.6163C20.0296 42.2 20.0296 36.8 16.6163 36.8H15.756V42.2Z" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M28.1016 39.4987C28.647 39.1102 28.8797 38.4058 28.9022 37.7272C28.9398 36.1422 27.979 35 26.4378 35H23V44H26.4378C27.1243 43.9945 27.7805 43.7063 28.2613 43.1989C28.7421 42.6915 29.0078 42.0068 28.9998 41.2961C29.0029 40.5808 28.6674 39.9094 28.1016 39.4987ZM24.7489 36.7948H26.2926C26.7507 36.8307 27.1046 37.2258 27.1046 37.7013C27.1046 38.1768 26.7507 38.5719 26.2926 38.6078H24.7489V36.7948ZM24.7489 42.2H26.2926V42.2026C26.5255 42.2054 26.7496 42.1107 26.914 41.94C27.0784 41.7694 27.1692 41.5371 27.1658 41.2961C27.1686 41.0565 27.0772 40.8259 26.9125 40.6574C26.7479 40.4889 26.5241 40.3969 26.2926 40.4026H24.7489V42.2Z" fill="#01D277" />
        <path fillRule="evenodd" clipRule="evenodd" d="M37.5013 27.7578L35.1024 23H33L37.2966 32H37.706L42 23H39.8976L37.5013 27.7578Z" fill="#01D277" />
    </svg>
);

const randomRectanglesSvgLeft = (
    <svg className="random-rectangles" id="left-svg" width="141" height="187" viewBox="0 0 141 187" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="-8" y="183.551" width="162" height="4" rx="2" transform="rotate(-45 -8 183.551)" fill="#01D277" fillOpacity="0.83" />
        <rect x="23" y="48.5513" width="162" height="4" rx="2" transform="rotate(-45 23 48.5513)" fill="#01D277" fillOpacity="0.83" />
        <rect x="23" y="21.5513" width="162" height="4" rx="2" transform="rotate(-45 23 21.5513)" fill="#01D277" fillOpacity="0.83" />
    </svg>
);

const randomRectanglesSvgRight = (
    <svg className="random-rectangles" id="right-svg" width="134" height="193" viewBox="0 0 134 193" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="38" y="30.5513" width="162" height="4" rx="2" transform="rotate(-45 38 30.5513)" fill="#01D277" fillOpacity="0.83" />
        <rect x="27" y="66.5513" width="162" height="4" rx="2" transform="rotate(-45 27 66.5513)" fill="#01D277" fillOpacity="0.83" />
        <rect y="189.551" width="162" height="4" rx="2" transform="rotate(-45 0 189.551)" fill="#01D277" fillOpacity="0.83" />
    </svg>
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);