import axios from 'axios';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavItem =  (props) => {
const logout = async () => {
 
  await axios.get('auth/logout')
  .then(response => {
     localStorage.clear()
  })
     props.setUser('');
}
    return (
        <>
  <Navbar  className="logedNav">
    <Link to="/my-recipes">My recipes</Link>
    <Link to="/my-profile">My profile</Link>
    <Link to="/login" onClick={logout}>Log out</Link>
  </Navbar>
</>
    )
}

export default NavItem;