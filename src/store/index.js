import { applyMiddleware, createStore } from "redux";
import reducer from "./reducer";
import Thunk from "redux-thunk";
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
    storyLines: [],
    hotSpots: [],
    storyItems:[],
  };

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(Thunk)));
export default store;
