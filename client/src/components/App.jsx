import React, { useState, useEffect } from 'react';
import MuscleHeaders from './MuscleHeaders.jsx';
import ExerciseList from './ExerciseList.jsx';
import MyWorkout from './MyWorkout.jsx';
import styled from 'styled-components';
const axios = require('axios');


const App = () => {
  const [equipment, setEquipment] = useState('');
  const [exerciseList, setExerciseList] = useState([]);
  const [currentMuscle, setCurrentMuscle] = useState('');
  const [workoutList, setWorkoutList] = useState([]);
  const [seeWorkout, setSeeWorkout] = useState(false);


  const addExercise = (exerciseId) => {
    if (workoutList.indexOf(exerciseId) === -1) {
      setWorkoutList([...workoutList, exerciseId]);
      console.log('workoutList: ', workoutList)
    }
  }

  useEffect(() => {
    axios.get('liftmeup/exercise', { params: { bodyPart: currentMuscle}})
    .then((response) => {
      console.log('response for get: ', response.data);
      setExerciseList(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }, [currentMuscle])


  const checkState = () => {
    console.log('exerciseList: ', exerciseList);
  }

  const generateWorkout = () => {
    axios.get('liftmeup/generate')
    .then((response) => {
      console.log('response for generate: ', response.data);
      setExerciseList(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }

    const toggleWorkout = (status) => {
    if (status === 'true') {
      setSeeWorkout(true);
    } else {
      setSeeWorkout(false);
    }
  }

  return (
    <div>
      <h1 onClick={() => toggleWorkout('false')}>
        Lift Me Up!
      </h1>
      <h2 onClick={() => toggleWorkout('true')}>My Workout</h2>
      <h2 onClick={generateWorkout}>Generate Workout</h2>
      <MuscleHeaders currentMuscle={currentMuscle} setCurrentMuscle={setCurrentMuscle}/>
      {seeWorkout ? <MyWorkout workoutList={workoutList} /> : <ExerciseList exerciseList={exerciseList} addExercise={addExercise}/>}
    </div>
  )
}

export default App;