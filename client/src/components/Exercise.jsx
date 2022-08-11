import React, { useState, useEffect } from 'react';
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

const Exercise = ({ exercise, addExercise }) => {
  const [showTutorial, setShowTutorail] = useState(false);
  const [exerciseName, setExerciseName] = useState('');

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

  const capitalize = (strings) => {
    let words = strings.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return  words.join(' ');
  }

  const toggleTutorial = () => {
    let status = showTutorial;
    setShowTutorail(!status);
  }

  return (
    <div>
      <ExerciseInfo>
        <ExerciseName>{capitalize(exercise.name)}</ExerciseName>
        {showTutorial ? <Photo src={exercise.gifUrl}></Photo> : <Photo src={muscle}></Photo>}
        <SecondaryInfo>Target Muscle: {capitalize(exercise.target)}</SecondaryInfo>
        <SecondaryInfo>Equipment: {capitalize(exercise.equipment)}</SecondaryInfo>
        <TutorialButton onClick={() => toggleTutorial()}>{showTutorial ? 'Exit Tutorial' : 'Show Tutorial'}</TutorialButton>
        {/* <button onClick={() => addExercise(exercise.id)}>Add to Workout</button> */}
      </ExerciseInfo>
    </div>
  )
}

const TutorialButton = styled.button`
background-image: linear-gradient(-180deg, #37AEE2 0%, #1E96C8 100%);
border-radius: .5rem;
box-sizing: border-box;
color: #FFFFFF;
display: flex;
font-size: 16px;
justify-content: center;
// padding: 0.5rem 1.75rem;
padding: 8px;
margin-top: 10px;
margin-left: 25px;
text-decoration: none;
width: 220px;
border: 0;
cursor: pointer;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

&:hover {
  // background-image: linear-gradient(-180deg, #1D95C9 0%, #17759C 100%);
  background-image: linear-gradient(209deg,#148dc1d4 0%,#147ba6 100%);
}
`

const SecondaryInfo = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  color: #838383d4;
  margin: 5px 20px 5px 8px;
  text-align: center;
`

const ExerciseName = styled.div`
  height: 50px;
  text-align: center;
  font-weight: 600;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  margin: 10px 10px 5px 8px;
`

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

export default Exercise;