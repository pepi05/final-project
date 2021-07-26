import { Container, Row, Col, Figure, Form } from "react-bootstrap";
import { useState } from 'react';
import Button from '../widgets/GreenButton';


const RecipeForm = (props) => {

    return (
        <Form className='recipe-form' onSubmit={props.submitForm}>
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
          <Form.Control type="text" placeholder="Homemade Pizza"  name='recipeTitle' value={props.form.recipeTitle} onChange={props.handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
    <Form.Group as={Col} >
    <Form.Label>Category</Form.Label>
    <Form.Control as="select" name='category' value={props.form.category} onChange={props.handleChange}>
      <option value="breakfast">Breakfast</option>
      <option value="brunch">Brunch</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
    </Form.Control>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Preparation Time</Form.Label>
      <Form.Control type="number" placeholder="45" name='preparationTime' value={props.form.preparationTime} onChange={props.handleChange} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>No. People</Form.Label>
      <Form.Control type="number" name="people" value={props.form.people} placeholder="4" onChange={props.handleChange} />
    </Form.Group>
  </Row>
      <Row className="mb-3">
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short Description</Form.Label>
    <Form.Control as="textarea" rows={4} name="shortDiscription" value={props.form.shortDiscription} onChange={props.handleChange} />
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
            {/* <Button  type="submit" className={"greenButton"} text={"save" } variant={"success"}  /> */}
            <button type="submit">Add</button>
            </Container>
            </Form>








  /*      <Form>
            <Container>
  <Row>
    <Col xs={12} sm={2} className='avatar-image'>
              <Figure>
                  <Figure.Image 
                    width={1928}
                    height={1080}
                    alt="1928x1080"
                    src="../pizza.png"
                   
                  />
              </Figure>
          <Button className={"whiteButton"} text="CHANGE AVATAR"  variant={"light"} />
          </Col>
    <Col xs={12} sm={6}>
    
    <Form.Group as={Col} >
      <Form.Label>Recipe Title</Form.Label>
      <Form.Control type="text" placeholder="Homemade Pizza" />
    </Form.Group>

    <Row className="mb-3">
    <Form.Group as={Col} >
    <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Preparation Time</Form.Label>
      <Form.Control type="number" placeholder="45" />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>No. People</Form.Label>
      <Form.Control type="number" placeholder="4" />
    </Form.Group>
  </Row>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short Description</Form.Label>
    <Form.Control as="textarea" rows={3} />
    <Button  type="submit" className={"greenButton"} text={"save" } variant={"success"} />
  </Form.Group>



    
   
    </Col>
    <Col>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Recipe</Form.Label>
    <Form.Control as="textarea"  />
  </Form.Group>
    </Col>
  </Row>
</Container>


</Form>
   */     
    )
}

export default RecipeForm;