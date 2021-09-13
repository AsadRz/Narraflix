import './Thumbnail.css';
// import Modal from "@material-ui/core/Modal";
// import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ModalImage from './ModalImage';
import Loader from '../../assets/Img/loaderrrrr.gif';

const Thumbnail = (props) => {
  let history = useHistory();
  let { sid } = useParams();
  //useState
  const [viewModal, setViewModal] = useState(props.open);
  const storyItems = useSelector((state) => state.storyItems);
  const hotSpots = useSelector((state) => state.hotSpots);
  const [bg, setBg] = useState(props.image);
  const [index, setIndex] = useState(props.index);
  const storyLines = useSelector((state) => state.storyLines);
  const [id, setId] = useState(props.id || sid);
  // const [width, setWidth] = useState(window.innerWidth);
  const [imgLoading, setImgLoading] = useState(true);
  const [videoSrc, setVideoSrc] = useState(null);

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
    // debugger;
    setBg(storyLine.storylineitem_set[index].image);
    if (storyLine.storylineitem_set[index].is_video) {
      setVideoSrc(storyLine.storylineitem_set[index].video);
    }
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
    // debugger;
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
            if (
              hotspot.type === 'link' &&
              (!imgLoading || storyLine.storylineitem_set[index].is_video)
            ) {
              // console.log('Hotspots', hotspot);
              // const windowWidth = window.innerWidth;
              // const imageWidth =
              //   document.getElementsByClassName('imageContainer')[0]
              //     .clientWidth;

              // const remainingWidth = (windowWidth - imageWidth) / 2;

              // const horizontalHotSpotPosition =
              //   (remainingWidth + (hotspot.position_left / 100) * imageWidth) /
              //   100;

              // const windowHeight = window.innerHeight;
              // const imageHeight = document.getElementById('image').clientHeight;

              // const remainingHeight = (windowHeight - imageHeight) / 2;

              // const verticalHotSpotPosition =
              //   (remainingHeight + (hotspot.position_top / 100) * imageHeight) /
              //   100;

              // console.log({
              //   horizontalHotSpotPosition,
              //   verticalHotSpotPosition,
              // });

              return (
                <div
                  className='hotspot'
                  style={{
                    position: 'absolute',
                    fontSize: `${hotspot.font_size}`,
                    textAlign: `${hotspot.text_align}`,
                    top: `${hotspot.position_top}%`,
                    left: `${hotspot.position_left}%`,
                    color: `#${hotspot.text_hex_color}`,
                  }}
                  onClick={() =>
                    hotspotInternalClick(hotspot.link_to_story_line_item)
                  }
                >
                  {' '}
                  <div className='circle'></div>
                </div>
              );
            } else if (
              hotspot.type === 'text' &&
              (!imgLoading || storyLine.storylineitem_set[index].is_video)
            ) {
              return (
                <p
                  style={{
                    position: 'absolute',
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
            } else if (
              hotspot.type === 'web' &&
              (!imgLoading || storyLine.storylineitem_set[index].is_video)
            ) {
              return (
                <div className='hotspot web' onClick={hotspotExternalClick}>
                  <a
                    style={{
                      position: 'absolute',
                      fontSize: `${hotspot.font_size}`,
                      textAlign: `${hotspot.text_align}`,
                      top: `${hotspot.position_top}%`,
                      left: `${hotspot.position_left}%`,
                      color: `#${hotspot.text_hex_color}`,
                    }}
                    href={`${hotspot.external_link}`}
                    target='_blank'
                    alt='This is a link'
                  >
                    <div className='circle'></div>
                  </a>
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
    history.push(
      `/storyline/${props.uuid}/${storyLine.storylineitem_set[index].id}`
    );
    setViewModal(true);
  };

  // const handleClose = () => {
  //   console.log("Closed Veroo");
  //   setViewModal(false);
  //   setBg(props.image);
  //   setId(props.id);
  //   setIndex(props.index);
  //   storyLine = [];
  //   history.push(`/`);
  // };

  const leftButtonClicked = () => {
    if (index <= length - 1 && index > 0) {
      setImgLoading(true);
      setIndex(index - 1);
      history.push(
        `/storyline/${props.uuid}/${storyLine.storylineitem_set[index - 1].id}`
      );
    }
  };

  const rightButtonClicked = () => {
    // debugger;
    if (index < length - 1) {
      setImgLoading(true);
      setIndex(index + 1);
      history.push(
        `/storyline/${props.uuid}/${storyLine.storylineitem_set[index + 1].id}`
      );
    }
  };

  const hotspotInternalClick = (id) => {
    // debugger;
    setImgLoading(true);
    let item = storyItemSpec(id);
    item = item[0];
    let st = storyLineExtractor(item.storyline);
    history.push(`/storyline/${st.uuid}/${st.storylineitem_set[0].id}`);
    storyLine = st;
    setId(storyLine.id);
    setIndex(item.order - 1);
  };

  const hotspotExternalClick = () => {};

  // const classes = useStyles();


  // Height Handling Inline for videos
  const body = (
    <div
      className='imageContainer'
      style={{
        height: storyLine.storylineitem_set[index].is_video && '100vh',
        alignSelf: !storyLine.storylineitem_set[index].is_video && 'center',
      }}
    >
      {' '}
      {storyLine.storylineitem_set[index].is_video ? (
        <>
          {imgLoading ? (
            <img id='image' className='loaderImg' src={Loader} />
          ) : (
            ''
          )}
          <video
            key={videoSrc}
            style={{
              height: '100%',

              width: '100%',
              backgroundSize: 'auto',
              position: 'absolute',
            }}
            autoPlay
            loop
            onLoad={() => {
              setImgLoading(false);
              // console.log('img is load');
              // alert('img loaded')
            }}
          >
            <source src={videoSrc} />
          </video>
        </>
      ) : (
        <>
          {imgLoading ? (
            <img id='image' className='loaderImg' src={Loader} />
          ) : (
            ''
          )}
          <img
            id='image'
            src={bg}
            style={{ display: imgLoading ? 'none' : 'block' }}
            onLoad={() => {
              setImgLoading(false);
              // console.log('img is load');
              // alert('img loaded')
            }}
          />
        </>
      )}
      {index > 0 && (
        <div className='leftButton' onClick={leftButtonClicked}></div>
      )}
      {index < length - 1 && (
        <div className='rightButton' onClick={rightButtonClicked}></div>
      )}
      {index == length - 1 && <div className='lastStoryText'></div>}
      <div className='hotspots'>{storyItemExtractor(id)}</div>
    </div>
  );

  let BG = props.image;

  console.log(storyLine.storylineitem_set[index], 'viewModel');

  return (
    <div>
      {!props.isRedirectUrl && (
        <div
          style={{
            backgroundImage: `url("${BG}")`,
            backgroundSize: 'cover  ',
          }}
          className='thumbnailContainer'
          onClick={handleOpen}
        ></div>
      )}
      {props.isRedirectUrl && (
        <ModalImage
          image={storyLine.storylineitem_set[index].image}
          viewModal={viewModal}
          body={body}
          imgLoading={imgLoading}
        />
      )}
    </div>
  );
};

export default Thumbnail;
