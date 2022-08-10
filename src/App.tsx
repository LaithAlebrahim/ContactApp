
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import Home from "./components/Contacts/Home";
import Create from "./components/Contacts/Create";
import BlogDetails from "./components/Contacts/UpdateContact";
import NptFound from "./components/Notfound/NotFound";
import Login from "./components/Sign/Login";
import SignUp from "./components/Sign/Register";
import "./App.css";
import { useAuth } from "./components/Sign/hooks/use-auth";

function App() {
  const {isAuth} = useAuth();

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="component">
          <Switch>
            <Route exact path="/Contacts">
              <Home isAuth={isAuth} />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/contacts/:id">
              <BlogDetails />
            </Route>
            <Route path="/login">
              <Login  />
            </Route>
            <Route path="/register">
              <SignUp  />
            </Route>
            <Route path="*">
              <NptFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
