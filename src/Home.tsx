import React from 'react';
import logo from './logo.svg';
import './Home.scss';
import MovieTile from './components/MovieTile';
import SearchInput from './components/SearchInput';
import MovileList from './components/MovieList';

const Home: React.FC = () => {
    return (
        <div className="movie-db-app">
            <div className="home-header">
                <SearchInput
                />
            </div>
            <div className="home-movies-wrapper">
                <h1>Popular Movies</h1>
                <MovileList
                    movieList={[
                        {
                            title:"Spiderman lol",
                            releaseDate:"25 Aug or smth",
                            imageUrl:"https://image.tmdb.org/t/p/original/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
                            rating:7.6
                        },
                        {
                            title:"Spiderman lol",
                            releaseDate:"25 Aug or smth",
                            imageUrl:"https://image.tmdb.org/t/p/original/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
                            rating:3
                        },
                        {
                            title:"Spiderman lol",
                            releaseDate:"25 Aug or smth",
                            imageUrl:"https://image.tmdb.org/t/p/original/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
                            rating:5
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default Home;
