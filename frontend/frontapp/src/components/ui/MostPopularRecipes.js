// import { Button, Card, Container, Modal, Col } from "react-bootstrap";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "../../assets/styles/dashboard.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const MostPopularRecipes  = () => {
//   const [data, setData] = useState();

//   const apiURL = "https://jsonplaceholder.typicode.com/comments";

//   useEffect(() => {
//       async function fetchData() {
//           const response = await axios.get(apiURL);
//           setData(response.data);
//       }
//       fetchData();
//   }, []);

// const [dataModal, setDataModal] = useState([]);
// const [show, setShow] = useState(false);

// const dataOut = (email, body) => {
//     let oneCard = [email, body];
//     setDataModal((x) => [ ...oneCard]);

//     return setShow(true);
// }

// const handleHide = () => setShow(false)




// return (
//     <Container>
//       <div id="asd1">
        
//         {data &&
//           data.map((x, index) => {
//             return (
//               <Col xs={12} sm={6} md={4}>
//               <Card className="card" key={index}>
//                 <Card.Img
//                   variant="top"
//                   src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
//                   className="fluid"
//                 />
//                 <Card.Body>
//                   <Card.Title className="cardTitle">{x.email}</Card.Title>
//                   <Card.Text className="cardText">{x.body}</Card.Text>
                 
//                   <Button
//                     variant="success"
//                     className="cardButton"
//                     onClick={() => {
//                       dataOut(x.email, x.body);
//                     }}
//                   >
//                      <i class="bi bi-arrow-right-short"></i>
                  
                     
//                   </Button>
                  
//                   <Card.Footer className="cardFooter">
//                     {
//                       <div>
//                         {/* <span className="material-icons">schedule</span> */}
//                         <i class="bi bi-clock"> <span> {x.id} minutes</span></i>
                       
//                       </div>
//                     }
//                     {
//                       <div>
//                         <i class="bi bi-people"> <span> {x.id} persons</span></i>
                        
//                       </div>
//                     }
//                      {
//                       <div>
//                         <i class="bi bi-star"> 28</i>
                       
//                       </div>
//                     }
                     
//                   </Card.Footer>
//                 </Card.Body>
//               </Card>
//               </Col>
//             );
//           })}
//         {show ? (
//           <Modal show={show}>
//             <Modal.Header>
//               <Modal.Title>{dataModal[0]}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <>
//                 <p>{dataModal[1]}</p>
//               </>
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleHide}>
//                 Close Modal
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         ) : (
//           ""
//         )}
//       </div>
//     </Container>
//   );
// }
// export default MostPopularRecipes;