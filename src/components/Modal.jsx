const modal = ({isOpen, onClose, movietitle}) => {

    if(!isOpen) return null;

    return ( 
        <>
            <div className="modal-overlay">
                <div className="modal">
                    <h2>Added to favourites</h2>
                    <p>You added {movietitle} to favourites.</p>
                    <button className="close-btn" onClick={onClose}>Close</button>
                </div>
            </div>
        </>
     );
}
 
export default modal;