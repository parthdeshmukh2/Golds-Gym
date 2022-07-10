import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";

import { excerciseOptions, fetchData,youtubeOptions } from '../Utils/FetchData.';
import Detail from '../Components/Detail';
import ExerciseVideos from '../Components/ExerciseVideos';
import SimilarExercises from '../Components/SimilarExercises';

const ExersiceDetail = () => {
const [exerciseDetail, setExerciseDetail ]= useState({});
const [exerciseVideos, setExerciseVideos] = useState([]);
const [targetMuscelExercises, setTargetMuscleExercises] = useState([]);
const [equipmentExercises, setEquipmentExercises] = useState([]); 

const {id} = useParams();

useEffect(()=>{
const fetchExercisesData =  async () => {
  const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
  const youTubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";

  const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, excerciseOptions)
  setExerciseDetail(exerciseDetailData);

  const exerciseVideosData= await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
  setExerciseVideos(exerciseVideosData.contents)

  const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, excerciseOptions);
  setTargetMuscleExercises(targetMuscleExercisesData);

  const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, excerciseOptions);
  setEquipmentExercises(equimentExercisesData);
}
fetchExercisesData();
},[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos= {exerciseVideos}  name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscelExercises} equipmentExercises={equipmentExercises} />      
    </Box>
  )
}

export default ExersiceDetail
