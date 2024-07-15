import {useState, useEffect} from 'react'
import React from 'react';
import MovieCard from '../../components/MovieCard';
import "./MovieGrid.css";

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([]) // cria uma variavel chamada topMovies e uma função chamda setTopMovies que permite atuazliar o estado 'topMovies'
  const getTopRatedMovies = async (url) => { // cria uma função assíncrona que possui como parâmetro a URL
    const res = await fetch(url) // faz uma requisão do get assíncrona para a URL
    const data = await res.json() // converte a resposta para JSON

    setTopMovies(data.results) // atualiza o estado 'topMovies'
  }

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`

    getTopRatedMovies(topRatedURL)
  }, [])

  return (
    <div className='container'>
      <h2 className='title'>Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p> }
      {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
)};

export default Home;
