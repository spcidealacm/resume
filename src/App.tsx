import React from "react";

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Example from "./pages/Example";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/example" component={Example} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
