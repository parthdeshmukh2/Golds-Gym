import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";

import { excerciseOptions, fetchData } from '../Utils/FetchData.';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';

const ExersiceDetail = () => {
const [exerciseDetail, setExerciseDetail ]= useState({});
const {id} = useParams();

useEffect(()=>{
const fetchExercisesData =  async () => {
  const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
  const youTubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

  const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excerciseOptions)
  setExerciseDetail(exerciseDetailData)
}
fetchExercisesData();
},[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos  />
      <SimilarExercises  />      
    </Box>
  )
}

export default ExersiceDetail
