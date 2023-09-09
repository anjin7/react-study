import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.module.css';
import Home from './routes/Home';
import Detail from './routes/Detail'

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/hello">
            <h2>Hello</h2>
          </Route>
          <Route path="/movie/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </div>
  )
}

export default App;
