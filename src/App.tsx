import React from "react";
import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
