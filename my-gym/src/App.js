
import './App.css';
import {Box} from "@mui/material"
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ExersiceDetail from './Pages/ExerciseDetail';
import Footer from './Components/Footer';

function App() {
  return (
   <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
     <Navbar/>
     <Routes>
       <Route path="/" element ={<Home/>} />
       <Route path="/exercise/:id" element ={<ExersiceDetail/>} />

     </Routes>
     <Footer/>

   </Box>
  );
}

export default App;
