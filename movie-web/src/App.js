import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.module.css';
import Home from './routes/Home';
import Detail from './routes/Detail'

function App() {
  return(
    <div>
      <Router>
        <Switch>
          <Route path="/character/:id">
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
