import Button from './Button';
import { useState } from "react";

const Movie = ({movietitle = "Movie Title", poster = "https://picsum.photos/300/450"}) => {

    const [favourites, setFavourites] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setFavourites(true);
        setSubmitted(true);
    }

    const closeModal = () => {
        setSubmitted(false);
    }

    const removeFavourites = () => {
        setFavourites(false);
    }

    return ( 
        <>
            <article className="movie-card">
                <img className="movie-image" src={poster} alt={movietitle} />
                <div className="movie-content">
                    <p className="movie-title">{movietitle}</p>
                    <Button 
                        className={`movie-btn ${favourites ? 'added': ''}`}
                        onClick={favourites ? removeFavourites : handleSubmit} 
                        text={favourites ? 'Remove from Favourites': 'Add to Favourites'} 
                    />
                </div>
            </article>
            {/* modal */}
            {
                submitted && 
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Added to favourites</h2>
                        <p>You added {movietitle} to favourites.</p>
                        <button className="close-btn" onClick={closeModal}>Close</button>
                    </div>
                </div>
            }
        </>
     );
}
 
export default Movie;