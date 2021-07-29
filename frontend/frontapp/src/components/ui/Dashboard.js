import { Button, Card, Container, Modal, Col, Row} from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assets/styles/dashboard.css";
import RouteHeader from "../widgets/routeheader";

const Dashboard = (props) => {
  const [freshItems, setFreshItems] = useState([]);
  const [popularItems, setPopularItems] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isPopularDataFetched, setIsPopularDataFetched] = useState(false);



  useEffect(() => {
    fetchFresh();
  }, []);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchFresh = async () => {
    await axios.get('/mainpage/fresh')
    .then((response) => {
      const data = response.data;
      console.log('New items', data);
      setFreshItems(data);
      setIsDataFetched(true);
    })
  };

  const fetchPopular = async () => {
    await axios.get('/mainpage/popular')
    .then((response) => {
      const data = response.data;
      console.log('popular', data);
      setPopularItems(data);
      setIsPopularDataFetched(true);
    })
  };
  



const [dataModal, setDataModal] = useState([]);
const [show, setShow] = useState(false);

const dataOut = (title, description, category, preparation_time, people, likes, recipe) => {
    let oneCard = [title, description, category, preparation_time, people, likes, recipe];
    setDataModal((x) => [ ...oneCard]);

    return setShow(true);
}

const handleHide = () => setShow(false)




return (
    <Container>
      <div id="asd1">
      <RouteHeader title={props.title1} />
        {isDataFetched &&
          freshItems.map((x, index) => {
            return (
              <Col xs={12} sm={6} md={4}>
              <Card className="card" key={index}>
                <Card.Img
                  variant="top"
                  src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                  className="fluid"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">{x.title}</Card.Title>
                  <Card.Text className="cardText">{x.description}</Card.Text>
                 
                  <Button
                    variant="success"
                    className="cardButton"
                    onClick={() => {
                      dataOut(x.title, x.description, x.category, x.preparation_time, x.people, x.likes, x.recipe);
                    }}
                  >
                     <i class="bi bi-arrow-right-short"></i>
                  
                     
                  </Button>
                  
                  <Card.Footer className="cardFooter">
                    {
                      <div>
                        {/* <span className="material-icons">schedule</span> */}
                        <i class="bi bi-clock"> <span> {x.preparation_time} minutes</span></i>
                       
                      </div>
                    }
                    {
                      <div>
                        <i class="bi bi-people"> <span> {x.people} persons</span></i>
                        
                      </div>
                    }
                     {
                      <div>
                        <i class="bi bi-star"><span>{x.likes}</span></i>
                       
                      </div>
                    }
                     
                  </Card.Footer>
                </Card.Body>
              </Card>
              </Col>
            );
          })}
  
      </div>

      <div id="asd1">
      <RouteHeader title={props.title2} />
      {isPopularDataFetched &&
          popularItems.map((x, index) => {
            return (
              <Col xs={12} sm={6} md={4}>
              <Card className="card" key={index}>
                <Card.Img
                  variant="top"
                  src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                  className="fluid"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">{x.title}</Card.Title>
                  <Card.Text className="cardText">{x.description}</Card.Text>
                 
                  <Button
                    variant="success"
                    className="cardButton"
                    onClick={() => {
                      dataOut(x.title, x.description, x.category, x.preparation_time, x.people, x.likes, x.recipe);
                    }}
                  >
                     <i class="bi bi-arrow-right-short"></i>
                  
                     
                  </Button>
                  
                  <Card.Footer className="cardFooter">
                    {
                      <div>
                        {/* <span className="material-icons">schedule</span> */}
                        <i class="bi bi-clock"> <span> {x.preparation_time} minutes</span></i>
                       
                      </div>
                    }
                    {
                      <div>
                        <i class="bi bi-people"> <span> {x.people} persons</span></i>
                        
                      </div>
                    }
                     {
                      <div>
                        <i class="bi bi-star"><span>{x.likes}</span></i>
                       
                      </div>
                    }
                     
                  </Card.Footer>
                </Card.Body>
              </Card>
              </Col>
            );
          })}
        {show ? (
          <Modal show={show}>
            <Modal.Header>
              <Modal.Title>{dataModal[0]}</Modal.Title>
              <Button  onClick={handleHide}>
                Close Modal
              </Button>
            </Modal.Header>
            <Modal.Body>
            <Container>
          <Row>
            <Col xs={6}>
              <Row>
               {/* 
               ---------
               da ja napravam dinamicka slikata */}
              <Card.Img
                  variant="top"
                  src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
                  className="fluid"
                />
              </Row>
              <Row>Best Servet for {dataModal[2]}</Row>
              <Row className="recipeDetailsText"><p>{dataModal[1]}</p></Row>
              
            </Col>
            <Col xs={6}>
              <Row>Recipe details</Row>
              <Row className="recipeDetailsText"><p>{dataModal[6]}</p></Row>
            </Col>
         
          </Row>
        </Container>


              <>
                
              </>
            </Modal.Body>
            <Modal.Footer>
              <Row className="modal-footer">
             {/* <Col> <i class="bi bi-clock"> <span> {dataModal[3]} min</span></i> </Col>
             <Col><i class="bi bi-clock"> <span> {dataModal[4]} min</span></i>  </Col>
             <Col><i class="bi bi-clock"> <span> {dataModal[5]} min</span></i> </Col> */}

             <span> <i class="bi bi-clock"> <span> {dataModal[3]} min</span></i> 
             <i class="bi bi-people"> <span> {dataModal[4]} min</span></i>  
             <i class="bi bi-star"> <span> {dataModal[5]} min</span></i> 
              </span>
            </Row>
                
            </Modal.Footer>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </Container>
  );
}

export default Dashboard;