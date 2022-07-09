import { Box, ListItem , Typography} from '@mui/material'
import React, {useContext} from 'react';
import BodyPart from "../Components/BodyPart"
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {

  

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((elem)=>(
          <Box key={elem.id || elem }  itemId={elem.id || elem}  tittle={elem.id || elem} m='0 40px'>
            <BodyPart item={elem} bodyPart={bodyPart} setBodyPart={setBodyPart}></BodyPart>

          </Box>
        ))}
      
    </ScrollMenu>
  )
}

export default HorizontalScrollbar
