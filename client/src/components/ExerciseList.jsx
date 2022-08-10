import React, { useState, useEffect } from 'react';
import Exercise from './Exercise.jsx';
const axios = require('axios');

const ExerciseList = ({ exerciseList }) => {



  return (
    <div>
      <div>
        {exerciseList.map((item, index) => (
          <Exercise exercise={item} key={index} />
        ))}
      </div>
    </div>
  )

}

export default ExerciseList;