import React from 'react';
import "./index.scss";
import SearchInput from '../../components/SearchInput';
import MovileList from '../../components/MovieList';
import { connect } from 'react-redux';
import AppState, { HomeState } from '../../redux/state';
import { Dispatch } from 'redux';
import { FetchPopularMovies } from '../../redux/actions';
import { ThunkDispatch } from 'redux-thunk';

interface HomeProps {
    homeState?: HomeState;
    fetchPopularMovies?: (searchKey?: string) => void;
}

export function mapStateToProps(state: AppState): HomeProps {
    return state;
}

export function mapDispatchToProps(dispatch: ThunkDispatch<{}, {}, any>) {
    return {
        fetchPopularMovies: (searchKey?: string) => dispatch(FetchPopularMovies(searchKey))
    }
}

class Home extends React.Component<HomeProps> {
    constructor(props: HomeProps) {
        super(props);
    }

    componentDidMount() {
        if (this.props.fetchPopularMovies !== undefined) this.props.fetchPopularMovies();
    }

    render() {
        return (
            <div className="movie-db-app">
            <div className="home-header">
                <SearchInput
                />
            </div>
            <div className="home-movies-wrapper">
                <h1>Popular Movies</h1>
                <MovileList
                    movieList={this.props.homeState && this.props.homeState.movies}
                />
            </div>
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);