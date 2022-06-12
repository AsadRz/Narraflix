import "./StoryLine.css";
import React, { Suspense } from "react";
const Thumbnail = React.lazy(() => import("../Thumbnail/Thumbnail"));

const StoryLine = (props) => {
  return (
    <div className="storyLineContainer">
      {props.line.storylineitem_set.map((storyLineItem, index) => {
        return (
          <Suspense key={index} fallback={<div>.</div>}>
            <Thumbnail
              id={props.line.id}
              image={storyLineItem.image}
              index={index}
              className="thumbnail"
              key={index}
              uuid={props.line.uuid}
            />
          </Suspense>
        );
      })}
    </div>
  );
};
export default StoryLine;
