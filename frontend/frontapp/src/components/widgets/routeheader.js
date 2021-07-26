import { Container } from "react-bootstrap";

const RouteHeader = (props) => {
  return (
    <>
      <Container className="routeHeader">
        <div className='title-header'>
         <div className="paragraph-title"> <p> {props.title} </p> </div>
          <div className="line-container">
            <hr />
          </div>
        </div>
      </Container>
    </>
  );
};

export default RouteHeader;