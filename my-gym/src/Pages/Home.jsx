import React from 'react';
import { useState } from 'react';
import {Box} from "@mui/material"
import HeroBanner from '../Components/HeroBanner';
import SearchExcercises from '../Components/SearchExcercises';
import Excercises from '../Components/Excercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [excercises, setExcercises] = useState([]);
  return (
    <Box>

      <HeroBanner/>
      <SearchExcercises setExcercises={setExcercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Excercises setExcercises={setExcercises} bodyPart={bodyPart} excercises={excercises} />
    </Box>
  )
}

export default Home
