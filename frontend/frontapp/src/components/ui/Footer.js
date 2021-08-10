import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../widgets/Logo";
import Nav from "../widgets/navmenu/nav";
import { Container, Row, Col } from   'react-bootstrap';
import "../../assets/styles/footer.css";

const Footer = () => {
    return ( 
<footer className="footer">
<Container>    
            <Row>
                <Col sm={4}>
                <Logo color="white" />
                </Col>
                    <Col sm={6}>
                    <Nav />
                    </Col>
                <Col sm={2} className="copyright">
                    <p>
                        Baby's Food Place <br /> copyright &copy; 2021
                    </p>
                </Col>
            </Row>
            </Container>
        </footer>    
    );
};

export default Footer;
