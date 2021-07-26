import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";


import "../../assets/styles/nav.css";
const GreenButton = ( {text, where, className, variant } ) => {
    return (
        <>
        
        <Link to={where}>
        <Button className={className} variant={variant} >
        {text}
        </Button>
        </Link>
        
        
        
        </>
    );
};

export default GreenButton;