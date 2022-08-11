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
    axios.get('liftmeup/generate', { params: { amount: 12}})
    .then((response) => {
      console.log('response for get upon render: ', response.data);
      setExerciseList(response.data)
    })
    .catch((err) => {
      console.error(err)
    })
  }, [])


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
    <Container>
      <Logo onClick={() => toggleWorkout('false')}>
        Lift Me Up!
      </Logo>
      <WorkoutTitles>
        <h2 onClick={() => toggleWorkout('true')}>My Workout</h2>
        <h2 onClick={generateWorkout}>Generate Workout</h2>
      </WorkoutTitles>
      <MuscleHeaders currentMuscle={currentMuscle} setCurrentMuscle={setCurrentMuscle} toggleWorkout={toggleWorkout}/>
      {seeWorkout ? <MyWorkout workoutList={workoutList} /> : <ExerciseList exerciseList={exerciseList} addExercise={addExercise}/>}
    </Container>
  )
}

const Logo = styled.h1`
margin: -8px 10px 10px 0px;
padding-left: 10px;
padding-top: 8px;
padding-bottom: 8px;
background-image: linear-gradient(to right,#575b5442,#e6feff);
font-family: 'Bebas Neue';
`

const WorkoutTitles = styled.div`
font-family: 'Source Sans Pro', sans-serif;
padding-left: 10px;
display: flex;
justify-content: space-between;
cursor: pointer;
`

const Container = styled.div`
width: 80%;
margin: auto;
`

export default App;