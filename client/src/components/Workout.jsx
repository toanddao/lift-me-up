import React, { useState, useEffect } from 'react';
const axios = require('axios');
import styled from 'styled-components';
import shoulders from './images/shoulders.png';
import chest from './images/chest.png';
import glutes from './images/glutes.png';
import hamstrings from './images/hamstrings.png';
import lats from './images/lats.png';
import quads from './images/quads.png';
import traps from './images/traps.png';
import triceps from './images/triceps.png';
import waist from './images/waist.png';
import biceps from './images/biceps.png';

const Workout = ({ exerciseId }) => {
  const [showTutorial, setShowTutorail] = useState(false);
  const [exercise, setExercise] = useState({});
  const [hasLoaded, setHasLoaded] = useState(false);

  const getExercise = () => {
    axios.get('liftmeup/workout', { params: { id: exerciseId}})
    .then((response) => {
      let data = response.data[0]
      console.log('response for get: ', data);
      setExercise(data)
    })
    .then(() => {
      setHasLoaded(true)
      console.log('exercise info: ', exercise)
    })
    .catch((err) => {
      console.error(err)
    })
  }

  useEffect(() => {
    getExercise()
  }, [])

  let muscle;
  if (exercise.bodyPart === 'chest') {
    muscle = chest;
  } else if (exercise.bodyPart === 'shoulders') {
    muscle = shoulders;
  } else if (exercise.target === 'biceps') {
    muscle = biceps;
  } else if (exercise.target === 'triceps') {
    muscle = triceps;
  } else if (exercise.target === 'hamstrings') {
    muscle = hamstrings;
  } else if (exercise.target === 'glutes') {
    muscle = glutes;
  } else if (exercise.target === 'quads' || exercise.target === 'adductors' || exercise.target === 'abductors') {
    muscle = quads;
  } else if (exercise.bodyPart === 'waist') {
    muscle = waist;
  } else if (exercise.target === 'lats') {
    muscle = lats;
  } else if (exercise.target === 'upper back' || exercise.target === 'traps' || exercise.target === 'spine') {
    muscle = traps;
  }

  const toggleTutorial = () => {
    let status = showTutorial;
    setShowTutorail(!status);
  }

  return (
    <div>
      {hasLoaded && <ExerciseInfo>
        <div>{exercise.name}</div>
        <div>Target Muscle: {exercise.target}</div>
        {showTutorial ? <Photo src={exercise.gifUrl}></Photo> : <Photo src={muscle}></Photo>}
        <div>Equipment: {exercise.equipment}</div>
        <button onClick={() => toggleTutorial()}>{showTutorial ? 'Exit Tutorial' : 'Show Tutorial'}</button>
      </ExerciseInfo>}
    </div>
  )
}

const TutorialGif = styled.img`
position: absolute;
z-index: 2;
top: 500px;
left: 450px;
height: 400px;
width: 400px
`

const ExerciseInfo = styled.div`
position: relative;
height: 400px;
width: 270px;
display: block;
align-items: center;
border: 2px solid lightgray;
// box-shadow: 7px 7px 7px ##e6feffa3;
box-shadow: 7px 7px 7px lightgray;
margin-right: 15px;
margin-left: 15px;
margin-bottom: 30px;
border-radius: 10px;
`

const Photo = styled.img`
height: 230px;
width: 265px;
`

export default Workout;