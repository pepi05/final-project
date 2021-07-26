import { Nav } from 'react-bootstrap';

const Navigation = () => {
   return (
       <>
            <Nav>
                  <Nav.Link href='/recipes/breakfast'>BREAKFAST</Nav.Link>
                  <Nav.Link href='/recipes/brunch'>BRUNCH</Nav.Link>
                  <Nav.Link href='/recipes/lunch'>LUNCH</Nav.Link>
                  <Nav.Link href='/recipes/dinner'>DINNER</Nav.Link>
            </Nav>
       </>
   )
};

export default Navigation;