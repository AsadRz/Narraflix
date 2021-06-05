import './StoryLine.css';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Thumbnail = React.lazy(() => import('../Thumbnail/Thumbnail'));

const StoryLine = () => {
  const { id, storyIndex } = useParams();
  const data = useSelector((state) => {
    return state.storyLines.filter(x => x.uuid === id);
  });

  if (!data) {
    return (<div>Loading</div>)
  }

  return (
    <div className='storyLineContainer'>
      {data &&

        data[0] && data[0].storylineitem_set.map((storyLineItem, index) => {
          return (
            <Suspense key={index} fallback={<div>Loading....</div>}>
              {data &&
                <Thumbnail
                  id={data[0].id}
                  image={storyLineItem.image}
                  index={index}
                  className='thumbnail'
                  key={index}
                  open={storyLineItem.id == storyIndex}
                  uuid={id}
                  isRedirectUrl
                />
              }
            </Suspense>
          );
        })

      }
    </div>
  );
};
export default StoryLine;
