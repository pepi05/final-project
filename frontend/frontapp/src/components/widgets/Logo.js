import { Link } from "react-router-dom";
import "./../../assets/styles/logo.css";
import { Container } from 'react-bootstrap';

const Logo = ({ color }) => {
    return (
        <Container>
        <div className='logo-container'>
        <Link to="/" className={`logo-box logo-box-${color}`}>
            <div className="logo">Baby's </div>
            <div className="logo-span">food place</div>
            
        </Link>
        </div>
        </Container>
    );
};

export default Logo;