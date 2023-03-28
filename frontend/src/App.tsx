import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Header';
import HomePage from './pages/Home';
import MoviePage from './pages/Movies';
import PodcastPage from './pages/Podcasts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="podcasts" element={<PodcastPage />} />
            <Route path="movies" element={<MoviePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
