import { Button, Card, Container, Modal, Col, Row } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../assets/styles/dashboard.css";

const MiniDashboard = (props) => {
  const [dataModal, setDataModal] = useState([]);
  const [show, setShow] = useState(false);
  const [isStarClicked, setIsStarClicked] = useState(false);
  const [items, setItems] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);
    useEffect(() => {
            fetchBreakfast();
        }, [isDataFetched, isStarClicked, !isStarClicked]);
    
        const fetchBreakfast = async () => {
            await axios.get(`/recipes/${props.category}`)
            .then((response) => {
                const data = response.data;
                setItems(data);
                setIsDataFetched(true);
            })
            .catch(() => {
                alert('error fetching data...')
            })
        }

        const dataOut = (title, description, category, preparation_time, people, likes, recipe, myFile) => {
          let oneCard = [title, description, category, preparation_time, people, likes, recipe, myFile];
          setDataModal((x) => [ ...oneCard]);
            return setShow(true);
        }
        
        const handleHide = () => setShow(false)

    return (
 <Container>
      <div id="asd1">
        {isDataFetched &&
          items.map((x) => {
            return (
              <Col xs={12} sm={6} md={4}>
              <Card className="card" key={x.id}>
                <Card.Img
                  variant="top"
                  src={x.myFile}
                  className="fluid"
                />
                <Card.Body>
                  <Card.Title className="cardTitle">{x.title}</Card.Title>
                  <Card.Text className="cardText">{x.description}</Card.Text>
                 
                  <Button
                    variant="success"
                    className="cardButton"
                    onClick={() => {
                      dataOut(x.title, x.description, x.category, x.preparation_time, x.people, x.likes, x.recipe, x.myFile);
                    }}
                  >
                     <i className="bi bi-arrow-right-short"></i>
                  </Button>
                  
                  <Card.Footer className="cardFooter">
                    {
                      <div>
                        <i className="bi bi-clock"> <span> {x.preparation_time} minutes</span></i>
                       
                      </div>
                    }
                    {
                      <div>
                        <i className="bi bi-people"> <span> {x.people} persons</span></i>
                        
                      </div>
                    }
                           { !isStarClicked ?
                      <div>
                        <i className="bi bi-star" onClick={ async () => {
                          const postId = x._id;
                          await axios.patch(`/recipes/${postId}/like`)
                          .then((response) => {
                           
                          console.log('response za liked:',response.data.data.likes);
                          
                          })
                          .then(() => {
                            setIsStarClicked(true);
                          })
                          .catch((error) => {
                          console.log(error);
                          })
                        }}><span>{x.likes}</span></i> 
                      </div>
                      :
                      <div>
                        <i className="bi bi-star" onClick={ async () => {
                          const postId = x._id;
                          await axios.patch(`/recipes/${postId}/dislike`)
                          .then((response) => {
                          console.log('response dislike',response.data.data.likes); 
                          })
                          .then(() => {
                            setIsStarClicked(false)
                          })
                          .catch((error) => {
                          console.log(error);
                          })
                        }}><span>{x.likes}</span></i>
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
              <Modal.Title><h2 className="orange-title">{dataModal[0]}</h2></Modal.Title>
              <button className="close-button" onClick={handleHide}>
                Close
              </button>
            </Modal.Header>
            <Modal.Body>
            <Container>
          <Row>
            <Col xs={6}>
              <Row>
              <Card.Img
                  variant="top"
                  src={dataModal[7]}
                  className="fluid"
                />
              </Row>
              <Row><h4 className="green-text">Best Servet for <span>{dataModal[2]}</span> </h4>  </Row>
              <Row className="recipeDetailsText"><p>{dataModal[1]}</p></Row>
              
            </Col>
            <Col xs={6}>
              <Row><h4 className="green-text">Recipe details</h4></Row>
              <Row className="recipeDetailsText"><p>{dataModal[6]}</p></Row>
            </Col>
         
          </Row>
        </Container>
            </Modal.Body>
            <Modal.Footer>
              <Row className="modal-footer">
             <span> <i className="bi bi-clock"> <span> {dataModal[3]} min</span></i> 
             <i className="bi bi-people"> <span> {dataModal[4]} min</span></i>  
             <i className="bi bi-star"> <span> {dataModal[5]} min</span></i> 
              </span>
            </Row>     
            </Modal.Footer>
          </Modal>
        ) : (
          ""
        )}
      </div>
      </Container> 
    )
}

export default MiniDashboard;