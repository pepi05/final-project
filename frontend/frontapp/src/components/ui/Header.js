import { useState } from "react";
import "../../assets/styles/nav.css";
import { Navbar, Container, Col, Row } from 'react-bootstrap';
import Logo from '../widgets/Logo';
import NavItem from "../widgets/navmenu/NavItem";
import Navigation from "../widgets/navmenu/nav";
import Button from '../widgets/GreenButton'

const Header = () => {
    const [user, setUser] = useState(false);

   
 
    return ( 
 
        <>
      <Container>
        <Row className='row-items'>
        <Col xs={6} md={2} className='logo-container'>
      <Navbar.Brand href="/"> <Logo /> </Navbar.Brand>
        </Col> 
            <Col xs={2} md={6}>
            <Navigation />
              </Col> 
              {user ? 
                <Col xs={4} md={4}>
                  <NavItem />
                </Col>
                  :
                  <>
                  <Col xs={4} className='header-buttons'>
                  <Button className={"whiteButton"} text="Log in" where={"/login"} variant={"light"} />
                     <span className="or">or</span>
                  <Button className={"greenButton"} text="Create account" where={"/register"} variant={"success"} />
                     </Col>
                  </>
              

              }

        </Row>
      </Container>
  
</>
    )
}







export default Header;
