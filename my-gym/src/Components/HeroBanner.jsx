import React from 'react'
import {Stack, Typography, Box, Button} from "@mui/material";
import Herobanner from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'}}} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px" >
             Fitness Club 
        </Typography>

        <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}} mb="23px" mt="30px" > 
            Sewat Smile <br/> Repeat
        </Typography>

        <Typography fontSize='22px' lineHeight='35px' mb={4}>
           Checkout the Most Effective Excercises
        </Typography>
      <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor:"#ff2625", paddding:"15px"}}>
          Explore Exercises
      </Button>
      <Typography fontWeight={600} fontSize="200px " color="#ff2625"  sx={{opacity:0.1, display:{lg:'block', xs:"none"}}}>
           Excercise
      </Typography>

      <img src={Herobanner} alt='Banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
