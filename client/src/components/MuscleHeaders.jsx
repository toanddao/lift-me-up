import React, { useState, useEffect } from 'react';
const axios = require('axios');
import styled from 'styled-components';

const MuscleHeaders = ( {currentMuscle, setCurrentMuscle, toggleWorkout}) => {

  const clickMuscle = (name) => {
    console.log(name);
    setCurrentMuscle(name)
    // console.log('currentMuscle: ', currentMuscle);
  }

  const checkState = () => {
    console.log('currentMuscle: ', currentMuscle);
  }


  return (
    <HeadersDiv onClick={() => toggleWorkout('false')}>
      <Title onClick={() => clickMuscle('chest')}>Chest</Title>
      <Title onClick={() => clickMuscle('back')}>Back</Title>
      <Title onClick={() => clickMuscle('upper legs')}>Legs</Title>
      <Title onClick={() => clickMuscle('shoulders')}>Shoulders</Title>
      <Title onClick={() => clickMuscle('upper arms')}>Arms</Title>
      <Title onClick={() => clickMuscle('waist')}>Core</Title>
      {/* <button onClick={checkState}>State</button> */}
    </HeadersDiv>
  )
}

const Title = styled.h2`
font-family: 'Source Sans Pro', sans-serif;
// border: 1px solid;
// border-radius: 10px;
margin-right: 10px;
width: 150px;
// padding-top: 10px;
// padding-bottom: 10px;
text-align: center;
color: black;
cursor: pointer;

&:hover {
  color: white;

`

const HeadersDiv = styled.div`
background-image: linear-gradient(to right,#64646433,#6464648f);
// border: 1px solid;
// border-radius: 10px;
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 30px;
// background-color: silver;
`

export default MuscleHeaders;