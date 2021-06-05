import React, { useEffect } from 'react';
import './App.css';
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import StoryRedirection from './Components/StoryRedirection/StoryRedirection'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import actions from './store/actions';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  //Hooks
  useEffect(() => {
    dispatch(actions.fetchStoryLines());
    dispatch(actions.fetchHotSpots());
    dispatch(actions.fetchStoryItems());
  }, [dispatch]);

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
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/storyline/:id/:storyIndex" exact>
          <StoryRedirection />
        </Route>
      </Switch>
    </Router>
  )
}

