import { Nav } from 'react-bootstrap';

const NavItem = () => {
    return (
        <>
  
    
  <Nav className="justify-content-end" >
    <Nav.Item>
      <Nav.Link href="/my-recipes">My recipes</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/my-profile">My profile</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/logout">Log out</Nav.Link>
    </Nav.Item>
  </Nav>
</>
    )
}

export default NavItem;