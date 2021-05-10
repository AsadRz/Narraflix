import './App.css';
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Thumbnail from './Components/Thumbnail/Thumbnail'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" >
          <Home />
        </Route>
        {/* <Route path="/storyline/:uuid/:sid">
          <Thumbnail />
        </Route> */}
      </Switch>
    </Router>
  )
}

