import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Nav from '../Components/Nav';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const localizer = momentLocalizer(moment)
 const MyCalender = (props) => {

  
           

  return (
    
    <Box sx={{display:'flex'}}>
    <Nav/>

    <Box
    component="main"
    className="card"
    sx={{ flexGrow: 1,mt:0, width:"20rem",padding :"15px",position: "relative",top:"40px",
    marginLeft: "35px",marginRight: "60px" }}
  >
    <Toolbar />
    <Calendar
    localizer={localizer}
    // events={myEventsList}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
  />
    </Box>
    

    </Box>
   
   
  )
}

export default MyCalender;