import View from "../View/View";
import StoryLine from "../StoryLine/StoryLine";
import actions from "../../store/actions";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const Home = () => {
  //Dispatch variable
  const dispatch = useDispatch();
  //Hooks
  useEffect(() => {
    console.log("is Fetching");
    dispatch(actions.fetchStoryLines());
    dispatch(actions.fetchHotSpots());
    dispatch(actions.fetchStoryItems());
  }, []);
  //state
  const data = useSelector((state) => state.storyLines);
  console.log("Hello", data);

  return (
    <div className="homeContainer">
   
      {data !== undefined &&
        data.map((x) => {
          return <StoryLine className="storyLine" line={x} />;
        })}
      
    </div>
  );
};
export default Home;
