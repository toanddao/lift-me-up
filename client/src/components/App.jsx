import React, { useState, useEffect } from 'react';
import MuscleHeaders from './MuscleHeaders.jsx';
import ExerciseList from './ExerciseList.jsx';
const axios = require('axios');


const App = () => {
  const [muscle, setMuscle] = useState('shoulders');
  const [equipment, setEquipment] = useState('');
  const [exerciseList, setExerciseList] = useState([]);
  const [exerciseInfo, setExerciseInfo] = useState('');
  const [currentMuscle, setCurrentMuscle] = useState('');

  // useEffect(() => {
  //   axios.get('liftmeup/exercise', { params: { bodyPart: muscle}})
  //   .then((response) => {
  //     console.log('response for get: ', response.data);
  //   })
  //   .catch((err) => {
  //     console.error(err)
  //   })
  // }, [])

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

  return (
    <div>
      <h1 onClick={checkState}>
        Lift Me Up!
      </h1>
      <h2>My Workout</h2>
      <MuscleHeaders currentMuscle={currentMuscle} setCurrentMuscle={setCurrentMuscle}/>
      <ExerciseList exerciseList={exerciseList} />
    </div>
  )
}

export default App;