import { Link } from 'react-router-dom';

const Navigation = () => {


   return (
       <>
        <div className="container-fluid ">
            <nav className="navbar navbar-expand-sm justify-content-center p-3">
                <ul className="navbar-nav" style={{ display: "flex"}}>
                    <li className="nav-item">
                    <Link to='/recipes/breakfast'>BREAKFAST</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/recipes/brunch'>BRUNCH</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/recipes/lunch'>LUNCH</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/recipes/dinner'>DINNER</Link>
                    </li>
                </ul>
            </nav>
        </div>
       </>
   )
};

export default Navigation;