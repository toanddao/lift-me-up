import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiPlus, FiMinus } from 'react-icons/fi'
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

const Exercise = ({ exercise, addExercise, removeExercise }) => {
  const [showTutorial, setShowTutorail] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [addStatus, setAddStatus] = useState(true);

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

  const toggleStatus = (status) => {
    if (status === 'true') {
      setAddStatus(true);
    } else {
      setAddStatus(false);
      console.log('TOGGLE STATUS WORKED')
    }
  }

  return (
    <div>
      <ExerciseInfo>
        <ExerciseName>{capitalize(exercise.name)}</ExerciseName>
        {showTutorial ? <ExerciseGif src={exercise.gifUrl}></ExerciseGif> : <Photo src={muscle}></Photo>}
        <SecondaryInfo>Target Muscle: {capitalize(exercise.target)}</SecondaryInfo>
        <SecondaryInfo>Equipment: {capitalize(exercise.equipment)}</SecondaryInfo>
        <TutorialButton onClick={() => toggleTutorial()}>{showTutorial ? 'Exit Tutorial' : 'Show Tutorial'}</TutorialButton>
        {addStatus? <Add onClick={() => {addExercise(exercise.id); toggleStatus('false');}} ></Add> : <Remove onClick={() => {removeExercise(exercise.id); toggleStatus('true');}} ></Remove>}
        {/* <button onClick={() => addExercise(exercise.id)}>Add to Workout</button> */}
      </ExerciseInfo>
    </div>
  )
}

const ExerciseGif = styled.img`
height: 230px;
width: 265px;
margin-left: 35px;
`

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
margin-left: 16px;
text-decoration: none;
width: 258px;
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

const Remove = styled(FiMinus)`
position: absolute;
top: 357px;
right: 10px;
height: 32px;
width: 32px;
color: #FFFFFF;
box-sizing: border-box;
background-image: linear-gradient(127deg,#ed1414 0%,#ad0303e0 100%);
border-radius: .5rem;
cursor: pointer;
touch-action: manipulation;

&:hover {
  background-image: linear-gradient(215deg,#dd1c1c 0%,#f54d4de0 100%);

`

const Add = styled(FiPlus)`
position: absolute;
top: 357px;
right: 10px;
height: 32px;
width: 32px;
color: #FFFFFF;
box-sizing: border-box;
background-image: linear-gradient(127deg,#2ff475 0%,#1cb514e0 100%);
border-radius: .5rem;
cursor: pointer;
touch-action: manipulation;

&:hover {
  background-image: linear-gradient(179deg,#03bb45 0%,#2ab223e0 100%);

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

const ExerciseInfo = styled.div`
position: relative;
height: 400px;
width: 330px;
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
margin-left: 35px;
`

export default Exercise;
