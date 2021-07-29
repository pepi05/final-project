import { Container, Row, Col, Figure, Form } from "react-bootstrap";
import { useState } from 'react';
import Button from '../widgets/GreenButton';


const RecipeForm = (props) => {

    return (
  
        <form className='recipe-form' onSubmit={props.submitForm}>
        <Container>
            <Row>
              <Col xs={12} md={2} className='recipe-image'>
                  <Figure>
                      <Figure.Image 
                        width={171}
                        height={180}
                        alt="171x180"
                        src="../pizza.png"
                        
                      />
                  </Figure>
              <Button className={"whiteButton"} text="UPLOAD IMAGE"  variant={"light"} />
              </Col>
              <Col xs={12} md={7}>
              
              <div className="recipeForm">
          
          <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control type="text" placeholder="Homemade Pizza"  name='title' value={props.form.title} onChange={props.handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
    <Col>
    <Form.Label>Category</Form.Label>
    <select name='category' value={props.form.category} onChange={props.handleChange}>
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
        </select>
        </Col>

    <Form.Group as={Col} >
      <Form.Label>Preparation Time</Form.Label>
      <Form.Control type="number" placeholder="45" name='preparation_time' value={props.form.preparation_time} onChange={props.handleChange} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>No. People</Form.Label>
      <Form.Control type="number" name="people" value={props.form.people} placeholder="4" onChange={props.handleChange} />
    </Form.Group>
  </Row>
      <Row className="mb-3">
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short Description</Form.Label>
    <Form.Control as="textarea" rows={4} name="description" value={props.form.description} onChange={props.handleChange} />
  </Form.Group>
      </Row>

      <br/>
      
        </div>
              </Col>
              <Col md={3}>
              <Row className="mb-3">
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Recipe</Form.Label>
    <Form.Control as="textarea" rows={11} name="recipe" value={props.form.recipe} onChange={props.handleChange} />
    
  </Form.Group>
  
      </Row>
      
              </Col>
              
            </Row>
          
            <button type="submit">Add</button>
            </Container>
            </form>






    
    )
}

export default RecipeForm;