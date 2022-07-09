import React from 'react';
import { useState } from 'react';
import {Box} from "@mui/material"
import HeroBanner from '../Components/HeroBanner';
import SearchExcercises from '../Components/SearchExcercises';
import Excercises from '../Components/Excercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>

      <HeroBanner/>
      <SearchExcercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Excercises setExercises={setExercises} bodyPart={bodyPart} excercises={exercises} />
    </Box>
  )
}

export default Home
