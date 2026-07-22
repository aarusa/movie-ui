import MovieList from './components/MovieList'

const App = () => {
  return ( 
    <div className="app">
      <header>
        <h1>Movie Watchlist</h1>
        <p>Track your favourite movies</p>
      </header>
      <section>
        <MovieList />
      </section>
    </div>
   );
}
 
export default App;