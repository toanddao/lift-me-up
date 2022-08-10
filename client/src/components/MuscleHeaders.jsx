import React, { useState, useEffect } from 'react';
const axios = require('axios');

const MuscleHeaders = ( {currentMuscle, setCurrentMuscle}) => {

  const clickMuscle = (name) => {
    console.log(name);
    setCurrentMuscle(name)
    // console.log('currentMuscle: ', currentMuscle);
  }

  const checkState = () => {
    console.log('currentMuscle: ', currentMuscle);
  }


  return (
    <div>
      <h2 onClick={() => clickMuscle('chest')}>Chest</h2>
      <h2 onClick={() => clickMuscle('back')}>Back</h2>
      <h2 onClick={() => clickMuscle('upper legs')}>Legs</h2>
      <h2 onClick={() => clickMuscle('shoulders')}>Shoulders</h2>
      <h2 onClick={() => clickMuscle('upper arms')}>Arms</h2>
      <button onClick={checkState}>State</button>
    </div>
  )
}

export default MuscleHeaders;