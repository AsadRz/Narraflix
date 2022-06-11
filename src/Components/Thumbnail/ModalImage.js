import "./Thumbnail.css";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useColor } from "color-thief-react";

const ModalImage = (props) => {
  console.log(props?.image);

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

  const { data, loading, error } = useColor(
    `${props.image}?not-from-same-origin`,
    "hex",
    {
      crossOrigin: "Anonymous",
      //  quality: 10000000000000000000000,
    }
  );
  /*The useColor statement above uses a propositional image stored in local host.
    It is done to byPass the CORS error. Once the application is deployed on server,
     the address "/mountains.jpg" will have to be replaced with "storyLine.storylineitem_set[index].image".
     Once done this will change the color of background based on the image being viewed*/

  //styles

  console.log(data, loading, error);

  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      position: "absolute",
      width: "100%",
      minHeight: "100%",
      backgroundColor: props?.lastShareStory
        ? "#233255 !important"
        : isMobile === false
        ? data === null
          ? "#000"
          : data
        : "black",
      boxShadow: theme.shadows[5],
      alignContent: "center",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Modal
      disableEscapeKeyDown={true}
      open={props.viewModal}
      //  onClose={handleClose}
      aria-labelledby="Image-Modal"
      aria-describedby="This is a modal containing stories"
    >
      <div
        className={classes.paper}
        style={{ backgroundColor: props.imgLoading ? "black" : "" }}
      >
        {props.body}
      </div>
    </Modal>
  );
};

export default ModalImage;
