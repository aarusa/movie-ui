const Button = ({text, className, onClick}) => {
    return ( 
        <button className={className} onClick={onClick}>&#9825; {text}</button>
     );
}
 
export default Button;