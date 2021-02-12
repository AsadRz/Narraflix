import "./Thumbnail.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../store/actions";

const Thumbnail = (props) => {
  //Dispatch variable
  const dispatch = useDispatch();

  //useState
  const [open, setOpen] = React.useState(false);
  const storyItems = useSelector((state) => state.storyItems);
  const hotSpots = useSelector((state) => state.hotSpots);
  const [bg, setBg] = useState(props.image);
  const [index, setIndex] = useState(props.index);
  const storyLines = useSelector((state) => state.storyLines);
  const [id, setId] = useState(props.id);

  //styles
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundColor: "#6d6963",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      alignContent: "center",
      justifyContent: "center",
    },
  }));
  //Global vars
  // let length = length;
  // let storyLine = props.storyLine;

  //Functions

  const storyLineExtractor = (id) => {
    let storyLine = storyLines.filter((f) => {
      if (f.id == id) {
        return f;
      }
    });

    storyLine = storyLine[0];
    return storyLine;
  };
  useEffect(() => {}, []);
  let storyLine = storyLineExtractor(id);
  let length = storyLine.storylineitem_set.length;

  const storyItemExtractor = (id) => {
    let u = storyItems.map((x) => {
      if (x.storyline === id) {
        return x.hotspot_set;
      }
    });
    u = u.filter((i) => {
      if (i !== undefined) {
        return i;
      }
    });
    let hotS = u.map((j) => {
      return j.map((o) => {
        return hotSpots.filter((k) => {
          if (o == k.id) {
            return k;
          }
        });
      });
    });
    hotS = hotS.map((j, i) => {
      if (i == index) {
        return j.map((l) => {
          return l.map((t) => {
            if (t.type === "link") {
              return (
                <div
                  className="hotspot"
                  style={{
                    fontSize: `${t.font_size}`,
                    textAlign: `${t.text_align}`,
                    top: `${t.position_top}%`,
                    left: `${t.position_left}%`,
                    color: `#${t.text_hex_color}`,
                  }}
                  onClick={() =>
                    hotspotInternalClick(t.link_to_story_line_item)
                  }
                ></div>
              );
            } else if (t.type === "text") {
              return (
                <p
                  style={{
                    position: "absolute",
                    fontSize: `${t.font_size}`,
                    textAlign: `${t.text_align}`,
                    top: `${t.position_top}%`,
                    left: `${t.position_left}%`,
                    color: `#${t.text_hex_color}`,
                  }}
                >
                  {t.content}
                </p>
              );
            } else if (t.type === "web") {
              return (
                <div
                  className="hotspot web"
                  style={{
                    fontSize: `${t.font_size}`,
                    textAlign: `${t.text_align}`,
                    top: `${t.position_top}%`,
                    left: `${t.position_left}%`,
                    color: `#${t.text_hex_color}`,
                  }}
                  onClick={hotspotExternalClick}
                >
                  <a
                    href={`${t.external_link}`}
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
    setOpen(true);
  };

  const handleClose = () => {
    // setIndex("0");

    setBg(props.image);
    setId(props.id);

    setIndex(0);
    storyLine = [];

    setOpen(false);
  };

  const leftButtonClicked = () => {
    if (index <= length - 1 && index > 0) {
      setBg(storyLine.storylineitem_set[index - 1].image);
      setIndex(index - 1);
    }
  };

  const rightButtonClicked = () => {
    if (index < length - 1) {
      setBg(storyLine.storylineitem_set[index + 1].image);
      setIndex(index + 1);
    }
  };

  const hotspotInternalClick = (id) => {
    setId(id);

    let st = storyLineExtractor(id);
    storyLine = st;

    setIndex(0);

    setBg(storyLine.storylineitem_set[index - 1].image);
  };

  const hotspotExternalClick = () => {};

  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <div
        className="imageContainer"
        style={{
          height: "100%",
          width: "414px",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
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
          <img
            src={bg}
            style={{
              height: "100%",
              width: "414px",
              backgroundSize: "cover",
              position: "absolute",
            }}
          ></img>
        )}
        {index > 0 && (
          <div className="leftButton" onClick={leftButtonClicked}></div>
        )}
        {index < length - 1 && (
          <div className="rightButton" onClick={rightButtonClicked}></div>
        )}
      </div>
      <div className="hotspots">{storyItemExtractor(id)}</div>
    </div>
  );
  let BG = props.image;

  return (
    <div
      style={{
        backgroundImage: `url("${BG}")`,
        backgroundSize: "cover  ",
      }}
      className="thumbnailContainer"
      onClick={handleOpen}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default Thumbnail;
