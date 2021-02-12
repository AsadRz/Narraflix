import constants from "./constants";
import services from "../services";

const fetchStoryLines = () => {
  console.log("Fetch Action");
  return (dispatch) => {
    try {
      const response = services.fetchStoryLines();
      dispatch({
        type: constants.FETCH_STORYLINES,
        payload: { storyLines: response },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
const fetchHotSpots = () => {
  console.log("Fetch Action");
  return (dispatch) => {
    try {
      const response = services.fetchHotSpots();
      dispatch({
        type: constants.FETCH_HOTSPOTS,
        payload: { hotSpots: response },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
const fetchStoryItems = () => {
  console.log("Fetch Action");
  return (dispatch) => {
    try {
      const response = services.fetchStoryItems();
      dispatch({
        type: constants.FETCH_STORY_ITEMS,
        payload: { storyItems: response },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export default {
  fetchStoryLines,
  fetchHotSpots,
  fetchStoryItems,
};
