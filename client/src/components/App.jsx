import React, { useState, useEffect } from 'react';

const App = () => {
  const [bodyPart, setBodyPart] = useState('shoulders');
  const [equipment, setEquipment] = useState('');
  const [workoutList, setWorkoutList] = useState([]);
  const [exerciseInfo, setExerciseInfo] = useState('');



  return (
    <div>
      <h1>
        Lift Me Up!
      </h1>
    </div>
  )
}

export default App;