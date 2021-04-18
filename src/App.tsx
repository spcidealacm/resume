import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Example from "./pages/Example";
import Home from "./pages/Home";
import data from "./mockdata/example.json";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/example">
          <ul>
            {data.map( d => <Example id={d.id} name={d.name} email={d.email}></Example>)}
          </ul>
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
