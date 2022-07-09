import React, {useState, useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material';

import { excerciseOptions, fetchData } from '../Utils/FetchData.';

import ExcerciseCard from './ExcerciseCard';

const Excercises = ({excercises, setExcercises,bodyPart }) => {
  console.log(excercises, "dhyuguy")
  return (
    <Box id='excercises' sx={{mt:{lg:'110px'}}} mt='50px' p='20px' >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>

      <Stack direction='row' sx={{gap:{lg:'110px', xs:'50px'}}} flexWrap='wrap' justifyContent='center'>

        {excercises.map((exercise, index)=> (
         <ExcerciseCard  key={index} exercise={exercise} />
        ) )}

      </Stack>
    </Box>
  )
}

export default Excercises
