import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import NotFound from "./NotFound";
import ListItem from "./components/ListItem";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/:id" component={ListItem} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
