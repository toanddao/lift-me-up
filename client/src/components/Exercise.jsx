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

const Exercise = ({ exercise }) => {

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


  return (
    <div>
      <ExerciseInfo>
        <div>{exercise.name}</div>
        {/* <img src={exercise.gifUrl}></img> */}
        <div>Target Muscle: {exercise.target}</div>
        <Photo src={muscle}></Photo>
        <div>Equipment: {exercise.equipment}</div>
        <button>Show Tutorial</button>
        <button>Add to Workout</button>
      </ExerciseInfo>
    </div>
  )
}

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