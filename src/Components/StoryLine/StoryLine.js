import "./StoryLine.css";
import Thumbnail from "../Thumbnail/Thumbnail";

const StoryLine = (props) => {
  return (
    <div className="storyLineContainer">
      {console.log("Props", props)}
      {props.line.storylineitem_set.map((k, index) => {
        console.log("StoryLine", k);
        return (
          <Thumbnail
            id={props.line.id}
            image={k.image}
            index={index}
            // length={props.line.storylineitem_set.length}
            className="thumbnail"
            key={index}
          />
        );
      })}
    </div>
  );
};
export default StoryLine;
