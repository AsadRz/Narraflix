import constants from './constants';
import services from '../services';

const fetchStoryLines = () => {
  console.log('Fetch Action');
  return (dispatch) => {
    try {
      services
        .fetchStoryLines()
        .then((res) => {
          dispatch({
            type: constants.FETCH_STORYLINES,
            payload: { storyLines: res.data },
          });
        })
        .catch((error) => {
          console.log(error);
        });
      // dispatch({
      //   type: constants.FETCH_STORYLINES,
      //   payload: { storyLines: response },
      // });
    } catch (error) {
      console.log(error);
    }
  };
};
const fetchHotSpots = () => {
  console.log('Fetch Action');
  return (dispatch) => {
    try {
      services
        .fetchHotSpots()
        .then((res) => {
          dispatch({
            type: constants.FETCH_HOTSPOTS,
            payload: { hotSpots: res.data },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
};
const fetchStoryItems = () => {
  console.log('Fetch Action');
  return (dispatch) => {
    try {
      services
        .fetchStoryItems()
        .then((res) => {
          dispatch({
            type: constants.FETCH_STORY_ITEMS,
            payload: { storyItems: res.data },
          });
        })
        .catch((error) => {
          console.log(error);
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
