import React, { useEffect, useState } from 'react';
import {Box, Button, Stack, Typography, TextField} from "@mui/material";
import { excerciseOptions, fetchData } from '../Utils/FetchData.';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExcercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(()=>{
    const fetchExcerciseData =async ()=> {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", excerciseOptions);

      setBodyParts(['all', ...bodyPartsData])
     // console.log(bodyPartsData,"data")
    }
   
    fetchExcerciseData();

  },[]);
  //console.log(bodyParts, "uiguh");
const handleSearch= async()=>{

  if(search){
    let url = "https://exercisedb.p.rapidapi.com/exercises"
     const excerciseData = await fetchData(url, excerciseOptions);

    // console.log(excerciseData);

     const searchedExcercise = excerciseData.filter((excercise)=> excercise.name.toLowerCase().includes(search)
     || excercise.target.toLowerCase().includes(search)
     || excercise.equipment.toLowerCase().includes(search)
     || excercise.bodyPart.toLowerCase().includes(search)) 

     setSearch("");
     setExercises(searchedExcercise);
  };
 

}

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px"> 

    <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:"30px"}}} mb="50px" textAlign="center" >
      Awesome Excercises You <br/> Should Know

    </Typography>

    <Box position="relative" mb="72px" >
      <TextField sx={{
        input:{fontWeight:"700", 
        border:"none", 
        borderRadius:"4px" }, 
        width:{lg:'800px', xs:'350px'}, 
        backgroundColor:"#fff" , borderRadius:"40px"}}
         height="76px" value={search} onChange={(e)=> setSearch(e.target.value.toLowerCase())} placeholder="Search Excercises "  type="text"/>

         <Button className='search-btn' sx={{backgroundColor:"#FF2625",
         color:"#fff", textTransform:"none", 
         width:{lg:'175px', xs:'80px'}, 
         fontSize:{lg:"20px", sm:"14px"},
          height:"56px",
           position:"absolute",
           right:'0'
           }} 
           onClick={handleSearch }>Search</Button>

    </Box>

    <Box sx={{position:'relative', width:'100%', p:'20px'}}>
      <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}/>

    </Box>
      
    </Stack>
  )
}

export default SearchExcercises
