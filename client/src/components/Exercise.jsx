import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
// border-radius: 10px;
`

const Exercise = ({ exercise }) => {




  return (
    <div>
      <ExerciseInfo>
        <div>{exercise.name}</div>
      </ExerciseInfo>
    </div>
  )
}

export default Exercise;