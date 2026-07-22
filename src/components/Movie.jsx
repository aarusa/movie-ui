import Button from './Button';

const Movie = ({movietitle = "Movie Title", poster = "https://picsum.photos/300/450"}) => {
    return ( 
        <>
            <article className="movie-card">
                <img className="movie-image" src={poster} alt={movietitle} />
                <div className="movie-content">
                    <p className="movie-title">{movietitle}</p>
                    <Button text='Add to favourites'/>
                </div>
            </article>
        </>
     );
}
 
export default Movie;