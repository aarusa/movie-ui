import Movie from './Movie'

const MovieList = () => {
    return ( 
        <>
            <div className="movie-grid">
                <Movie movietitle='Interstellar' poster='https://picsum.photos/seed/movie7/300/450'/>
                <Movie movietitle='A Walk to Remember' poster='https://picsum.photos/seed/movie2/300/450'/>
                <Movie movietitle='Back to the Future' poster='https://picsum.photos/seed/movie3/300/450'/>
                <Movie movietitle='Avatar' poster='https://picsum.photos/seed/movie4/300/450'/>
                <Movie movietitle='Obsession' poster='https://picsum.photos/seed/movie5/300/450'/>
                <Movie movietitle='Fault in our Stars' poster='https://picsum.photos/seed/movie6/300/450'/>
            </div>
        </>
     );
}
 
export default MovieList;