import { Container, Row, Col, Figure, Form } from "react-bootstrap";

const RecipeForm = (props) => {
    return (
        <form className='recipe-form' onSubmit={props.handleSubmit}>
        <Container>
            <Row>
              <Col xs={12} md={2} className='recipe-image'>
                  <Figure>
                      <Figure.Image 
                        width={171}
                        height={180}
                        alt="171x180"
                        src={props.recipeImage.myFile}
                        value={props.recipes.myFile}
                        name='myFile'
                      />
                  </Figure>
              <input  type='file' name='myFile' id="image-upload" onChange={ (e) => props.handleFileUpload(e) }  />
              <label className="whiteButton" htmlFor="image-upload"> UPLOAD IMAGE </label>
              </Col>
              <Col xs={12} md={7}>
              <div className="recipeForm">
          <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control type="text" placeholder="Homemade Pizza"  name='title' value={props.recipes.title} onChange={props.handleChange} />
        </Form.Group>
      </Row>

      <Row className="mb-3">
    <Col>
    <Form.Label>Category</Form.Label>
    <select name='category' value={props.recipes.category} onChange={props.handleChange}>
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
        </select>
        </Col>

    <Form.Group as={Col} >
      <Form.Label>Preparation Time</Form.Label>
      <Form.Control type="number" placeholder="45" name='preparation_time' value={props.recipes.preparation_time} onChange={props.handleChange} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>No. People</Form.Label>
      <Form.Control type="number" name="people" value={props.recipes.people} placeholder="4" onChange={props.handleChange} />
    </Form.Group>
  </Row>
      <Row className="mb-3">
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Short Description</Form.Label>
    <Form.Control as="textarea" rows={4} name="description" value={props.recipes.description} onChange={props.handleChange} />
  </Form.Group>
      </Row>
      <br/>
        </div>
              </Col>
              <Col md={3}>
              <Row className="mb-3">
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Recipe</Form.Label>
    <Form.Control as="textarea" rows={11} name="recipe" value={props.recipes.recipe} onChange={props.handleChange} /> 
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