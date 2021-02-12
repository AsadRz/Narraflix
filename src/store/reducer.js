//******************************************************
//*Fetch keyword is used where data is fetched from api*
//*Get is used where data is needed used in the app*
//******************************************************
import constants from "./constants";

const initialState = {
  storyLines: [],
  hotSpots: [],
  storyItems: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_STORYLINES:
      return {
        ...state,
        storyLines: action.payload.storyLines,
      };
    case constants.FETCH_HOTSPOTS:
      return {
        ...state,
        hotSpots: action.payload.hotSpots,
      };
    case constants.FETCH_STORY_ITEMS:
      return {
        ...state,
        storyItems: action.payload.storyItems,
      };

    default:
      return state;
  }
};
export default reducer;
