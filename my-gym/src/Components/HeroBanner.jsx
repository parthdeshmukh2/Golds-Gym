import React from 'react'
import {Stack, Typography, Box, Button} from "@mui/material";
import Herobanner from "../assets/images/banner.png"

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px', xs:'70px'}, ml:{sm:'50px'}}} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px" >
             Fitness Club 
        </Typography>

        <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}}>
            Sewat Smile <br/> Repeat
        </Typography>

        <Typography fontSize='22px' lineHeight='35px' mb={3}>
           Chcekout the Most Effective Excercises
        </Typography>
      <Button variant='contained' color='error' href='#exercises'>
          Explore Exercises
      </Button>
      <Typography fontWeight={600} color="#ff2625" >

      </Typography>

      <img src={Herobanner} alt='Banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
