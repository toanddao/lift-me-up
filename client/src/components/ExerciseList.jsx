import React, { useState, useEffect } from 'react';
import Exercise from './Exercise.jsx';
import styled from 'styled-components';
const axios = require('axios');

const ExerciseList = ({ exerciseList }) => {



  return (
    <div>
      <ExerciseDiv>
        {exerciseList.map((item, index) => (
          <Exercise exercise={item} key={index} />
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

export default ExerciseList;