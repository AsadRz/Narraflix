// import View from '../View/View';
// import StoryLine from "../StoryLine/StoryLine";
import actions from '../../store/actions';
import React, { Suspense, useEffect } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
import './Home.css';
import { useSelector } from 'react-redux';
const StoryLine = React.lazy(() => import('../StoryLine/StoryLine'));
const Home = () => {
  //Dispatch variable
  // const dispatch = useDispatch();
  // //Hooks
  // useEffect(() => {
  //   dispatch(actions.fetchStoryLines());
  //   dispatch(actions.fetchHotSpots());
  //   dispatch(actions.fetchStoryItems());
  // }, [dispatch]);

  useEffect(() => {
    // <Redirect to='https://narraflix.com/' />;
    window.location.replace('https://narraflix.com/');
  });

  //state
  const data = useSelector((state) => {
    console.log('State', state);
    return state.storyLines;
  });
  console.log('Data Being Fetched', data);
  return (
    <div className='homeContainer'>
      <Suspense fallback={<div>Loading</div>}>
        {data !== undefined &&
          data.map((storyLine) => {
            return (
              <StoryLine
                key={storyLine.id}
                className='storyLine'
                line={storyLine}
              />
            );
          })}
      </Suspense>
    </div>
  );
};
export default Home;
