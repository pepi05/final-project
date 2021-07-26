// import { Button, Card, Container, Modal, Col } from "react-bootstrap";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "../../assets/styles/dashboard.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const FreshNewRecipes = () => {
//   const [freshItems, setFreshItems] = useState([]);
//   const [isDataFetched, setIsDataFetched] = useState(false)



//   useEffect(() => {
//     fetchFresh();
//   }, []);

//   const fetchFresh = async () => {
//     await axios.get('/mainpage/fresh')
//     .then((response) => {
//       const data = response.data;
//       console.log('New items', data);
//       setFreshItems(data);
//       setIsDataFetched(true);
//     })
//   };



// const [dataModal, setDataModal] = useState([]);
// const [show, setShow] = useState(false);

// const dataOut = (title, content) => {
//     let oneCard = [title, content];
//     setDataModal((x) => [ ...oneCard]);

//     return setShow(true);
// }

// const handleHide = () => setShow(false)




// return (
//     <Container>
//       <div id="asd1">
        
//         {isDataFetched &&
//           freshItems.map((x, index) => {
//             return (
//               <Col xs={12} sm={6} md={4}>
//               <Card className="card" key={index}>
//                 <Card.Img
//                   variant="top"
//                   src="https://coolwallpapers.me/picsup/2723041-pizza-4k-free-wallpaper-for-desktop.jpg"
//                   className="fluid"
//                 />
//                 <Card.Body>
//                   <Card.Title className="cardTitle">{x.title}</Card.Title>
//                   <Card.Text className="cardText">{x.content}</Card.Text>
                 
//                   <Button
//                     variant="success"
//                     className="cardButton"
//                     onClick={() => {
//                       dataOut(x.title, x.content);
//                     }}
//                   >
//                      <i class="bi bi-arrow-right-short"></i>
                  
                     
//                   </Button>
                  
//                   <Card.Footer className="cardFooter">
//                     {
//                       <div>
//                         {/* <span className="material-icons">schedule</span> */}
//                         <i class="bi bi-clock"> <span> {x.preparation_time} minutes</span></i>
                       
//                       </div>
//                     }
//                     {
//                       <div>
//                         <i class="bi bi-people"> <span> {x.people} persons</span></i>
                        
//                       </div>
//                     }
//                      {
//                       <div>
//                         <i class="bi bi-star"><span>{x.likes}</span></i>
                       
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
// export default FreshNewRecipes;