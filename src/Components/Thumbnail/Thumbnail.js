import "./Thumbnail.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";
import { useColor } from "color-thief-react";

const Thumbnail = (props) => {
  //Dispatch variable
  const dispatch = useDispatch();

  //useState
  const [viewModal, setViewModal] = useState(false);
  const storyItems = useSelector((state) => state.storyItems);
  const hotSpots = useSelector((state) => state.hotSpots);
  const [bg, setBg] = useState(props.image);
  const [index, setIndex] = useState(props.index);
  const storyLines = useSelector((state) => state.storyLines);
  const [id, setId] = useState(props.id);
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  
  let isMobile = width <= 444;
  const { data, loading, error } = useColor("/mountains.jpg", "hex", {
    crossOrigin: "Anonymous",
    quality: 10000000000000000000000,
  });
  /*The useColor statement above uses a propositional image stored in local host.
  It is done to byPass the CORS error. Once the application is deployed on server,
   the address "/mountains.jpg" will have to be replaced with "storyLine.storylineitem_set[index].image".
   Once done this will change the color of background based on the image being viewed*/

  //styles
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: isMobile===false?data === null ? "#000" : data:"black",
      boxShadow: theme.shadows[5],
      alignContent: "center",
      justifyContent: "center",
    },
  }));

  //Functions

  const storyLineExtractor = (id) => {
    let storyLine = storyLines.filter((findStoryLine) => {
      if (findStoryLine.id == id) {
        return findStoryLine;
      }
    });

    storyLine = storyLine[0];
    return storyLine;
  };
  useEffect(() => {
    setBg(storyLine.storylineitem_set[index].image);
  }, [index]);
  let storyLine = storyLineExtractor(id);
  let length = storyLine.storylineitem_set.length;

  const storyItemSpec = (id) => {
    let storyItemObjects = storyItems.filter((storyItemObject) => {
      if (storyItemObject.id === id) {
        return storyItemObject;
      }
    });
    return storyItemObjects;
  };
  const storyItemExtractor = (id) => {
    let hotSpotSet = storyItems.map((currentStoryLine) => {
      if (currentStoryLine.storyline === id) {
        return currentStoryLine.hotspot_set;
      }
    });
    hotSpotSet = hotSpotSet.filter((filterUndefinedItem) => {
      if (filterUndefinedItem !== undefined) {
        return filterUndefinedItem;
      }
    });
    let hotS = hotSpotSet.map((nestedArrays) => {
      return nestedArrays.map((nestedArray) => {
        return hotSpots.filter((filteredArray) => {
          if (nestedArray == filteredArray.id) {
            return filteredArray;
          }
        });
      });
    });
    hotS = hotS.map((data, Index) => {
      if (Index == index) {
        return data.map((hotspots) => {
          return hotspots.map((hotspot) => {
            if (hotspot.type === "link") {
              return (
                <div
                  className="hotspot"
                  style={{
                    fontSize: `${hotspot.font_size}`,
                    textAlign: `${hotspot.text_align}`,
                    top: `${hotspot.position_top}%`,
                    left: `${hotspot.position_left}%`,
                    color: `#${hotspot.text_hex_color}`,
                  }}
                  onClick={() =>
                    hotspotInternalClick(hotspot.link_to_story_line_item)
                  }
                ></div>
              );
            } else if (hotspot.type === "text") {
              return (
                <p
                  style={{
                    position: "absolute",
                    fontSize: `${hotspot.font_size}`,
                    textAlign: `${hotspot.text_align}`,
                    top: `${hotspot.position_top}%`,
                    left: `${hotspot.position_left}%`,
                    color: `#${hotspot.text_hex_color}`,
                  }}
                >
                  {hotspot.content}
                </p>
              );
            } else if (hotspot.type === "web") {
              return (
                <div
                  className="hotspot web"
                  style={{
                    fontSize: `${hotspot.font_size}`,
                    textAlign: `${hotspot.text_align}`,
                    top: `${hotspot.position_top}%`,
                    left: `${hotspot.position_left}%`,
                    color: `#${hotspot.text_hex_color}`,
                  }}
                  onClick={hotspotExternalClick}
                >
                  <a
                    href={`${hotspot.external_link}`}
                    target="_blank"
                    alt="This is a link"
                  ></a>
                </div>
              );
            }
          });
        });
      }
    });
    return hotS;
  };

  const handleOpen = () => {
    setViewModal(true);
  };

  const handleClose = () => {
    console.log("Closed Veroo");
    setViewModal(false);
    setBg(props.image);
    setId(props.id);
    setIndex(props.index);
    storyLine = [];
  };

  const leftButtonClicked = () => {
    if (index <= length - 1 && index > 0) {
      setIndex(index - 1);
    }
  };

  const rightButtonClicked = () => {
    if (index < length - 1) {
      setIndex(index + 1);
    }
  };

  const hotspotInternalClick = (id) => {
    let item = storyItemSpec(id);
    item = item[0];
    let st = storyLineExtractor(item.storyline);
    storyLine = st;
    setId(storyLine.id);
    setIndex(item.order - 1);
  };

  const hotspotExternalClick = () => {};

  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <p onClick={handleClose} className="cross">
        X
      </p>
      <div className="imageContainer">
        {" "}
        {storyLine.storylineitem_set[index].is_video ? (
          <video
            style={{
              height: "100%",

              width: "100%",
              backgroundSize: "cover",
              position: "absolute",
            }}
            autoPlay
            loop
          >
            <source src={storyLine.storylineitem_set[index].video} />
          </video>
        ) : (
          <img id="image" src={bg}></img>
        )}
        {index > 0 && (
          <div className="leftButton" onClick={leftButtonClicked}></div>
        )}
        {index < length - 1 && (
          <div className="rightButton" onClick={rightButtonClicked}></div>
        )}
        {index == length - 1 && <div className="lastStoryText">Last Story</div>}
        <div className="hotspots">{storyItemExtractor(id)}</div>
      </div>
    </div>
  );

  let BG = props.image;

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("${BG}")`,
          backgroundSize: "cover  ",
        }}
        className="thumbnailContainer"
        onClick={handleOpen}
      ></div>

      <Modal
        open={viewModal}
        onClose={handleClose}
        aria-labelledby="Image-Modal"
        aria-describedby="This is a modal containing stories"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Thumbnail;
