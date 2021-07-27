// styles
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/loginForm.css";
import '../assets/styles/routeHeader.css';

import Error from "../components/ui/messages/error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Dinner from "./pages/Dinner";
import Lunch from "./pages/Lunch";
import Brunch from "./pages/Brunch";
import Breakfast from "./pages/Breakfast";
import MyProfile from "./pages/MyProfile";
import MyRecipes from "./pages/MyRecipes";
// import CreateRecipe from "./pages/CreateRecipe";


const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
            <Header />
                <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/login" component={Login} />

                <Route exact path="/register" component={Register} />

                {/* <Route exact path="/create" component={Recipe} /> */}

                <Route exact path="/recipes/lunch" component={Lunch} />

                <Route exact path="/recipes/dinner" component={Dinner} />

                <Route exact path="/recipes/breakfast" component={Breakfast} />

                <Route exact path="/recipes/brunch" component={Brunch} />

                <Route exact path="/my-recipes" component={MyRecipes} />

                {/* <Route path="/my-recipes/create" component={CreateRecipe} /> */}

                <Route exact path="/my-profile" component={MyProfile} />

                </Switch>

                <Route path="*" component={Error} />
                
                
                  
         
            <Footer />
        </div>
        </BrowserRouter>
    );
};


export default App;