import React from 'react';
import './App.scss';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MoviePage from './pages/MoviePage';

const App: React.FC = () => {
    return (
        <Router>
            <div className="movie-db-app">
                <Route path="/" exact component={Home} />
                <Route path={"/movie/:movieId"} component={MoviePage} />
            </div>
        </Router>
    );
}

export default App;
