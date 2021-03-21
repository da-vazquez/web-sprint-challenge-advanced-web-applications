import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/bubbles'>Color List</Link>
        </nav>
      <Switch>
        <PrivateRoute path='/bubbles' component={BubblePage}/>
        <Route exact path="/" component={Login} />


    </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute