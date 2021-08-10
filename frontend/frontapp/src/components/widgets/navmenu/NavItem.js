import axios from 'axios';
import { Nav } from 'react-bootstrap';

const NavItem = (props) => {
  
const logout = async () => {
  await axios.get('auth/logout')
  .then(response => {
    console.log(response);
    localStorage.clear()
  })
  props.setUser('');
}

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
      <Nav.Link href="/login" onClick={logout}>Log out</Nav.Link>
    </Nav.Item>
  </Nav>
</>
    )
}

export default NavItem;