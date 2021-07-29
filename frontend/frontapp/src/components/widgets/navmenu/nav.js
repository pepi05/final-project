import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
   return (
       <>
            <Nav>
                  <Link to='/recipes/breakfast'>BREAKFAST</Link>
                  <Link to='/recipes/brunch'>BRUNCH</Link>
                  <Link to='/recipes/lunch'>LUNCH</Link>
                  <Link to='/recipes/dinner'>DINNER</Link>
            </Nav>
       </>
   )
};

export default Navigation;