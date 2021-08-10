import { Route, Switch, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/loginForm.css";
import '../assets/styles/routeHeader.css';
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

import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
    const [user, setUser] = useState('')
    const config = {
      Headers: {
        Authrization: 'Bearer ' + localStorage.getItem('token')
      }
    }
   
     useEffect(() => {
   
       axios.get('auth/user', config)
       .then((response) => {
        setUser({
          first_name: response.data.first_name,
          user_id: response.data._id
        })
        
       })
       .catch((err) => console.log(err))
     }, [])

    return (
        <BrowserRouter>
        <div className="App">
            <Header user={user} setUser={setUser} />
                <Switch>
                <Route exact path="/" component={() => <Home user={user}  />} />

                <Route exact path="/login" component={() => <Login user={user} setUser={setUser} />}  />

                <Route exact path="/register" component={Register}  />

                <Route exact path="/recipes/lunch" component={Lunch} />

                <Route exact path="/recipes/dinner" component={Dinner} />

                <Route exact path="/recipes/breakfast" component={Breakfast} />

                <Route exact path="/recipes/brunch" component={Brunch} />

                <Route exact path="/my-recipes" component={() => <MyRecipes user={user} setUser={setUser}/>}  />

                <Route exact path="/my-profile" component={MyProfile}/>

                </Switch>
            <Footer />
        </div>
        </BrowserRouter>
    );
};


export default App;