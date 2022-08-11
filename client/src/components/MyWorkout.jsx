import React, { useState, useEffect } from 'react';
import Workout from './Workout.jsx';
import styled from 'styled-components';
const axios = require('axios');

const MyWorkout = ({ workoutList, removeExercise }) => {



  return (
    <div>
      <ExerciseDiv>
        {workoutList.map((item, index) => (
          <Workout exerciseId={item} key={index} removeExercise={removeExercise}/>
        ))}
      </ExerciseDiv>
    </div>
  )

}

const ExerciseDiv = styled.div`
display: flex;
justify-content: space-around;
// align-items: center;
flex-flow: row wrap;
`

export default MyWorkout;