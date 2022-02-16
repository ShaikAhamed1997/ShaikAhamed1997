import React, { useState, useRef, useEffect, useCallback } from "react";
import * as rrweb from "rrweb";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Player from './Player';
import Header from "./Header";
import { Form } from 'react-bootstrap'
import Contactus from "./Contactus";
import { Link } from "react-router-dom";

const PlainMenu = (props) => {
  //   const [stopFn, setStopFn] = useState()
  //   const [events, setEvents] = useState([])
  //   const [displayEvents, setDisplayEvents] = useState([])
  
  //   const [count, setCount] = useState(0);
  
  //   const handleClick = () => {
  //     let rrwebHandler = rrweb.record({
  //       emit(event) {
       
  //         setEvents(events => [...events, event])
  //         console.log("####:", events.length, ", ", event);
  //       },
  //     });
  //     setStopFn(() => rrwebHandler)
  //   };
  //  useEffect(()=>{
  //   if( navigator.userAgent){
  //     handleClick() 
  //   }else {
  //     setStopFn(undefined)
  //   }
  
  // },[])
  // // console.log(navigator.userAgent)
  //   const handleStop = () => {
  //     if (stopFn) {
  //       // stopFn();
  //       setStopFn(undefined)
  //     }
  //     console.log(events);
  //     if (events.length < 2) {
  //       console.log("it needs more than 2 events to play");
  //       return;
  //     }
  
  //     setDisplayEvents(events);
  //   };
  
  //   const handleCount = () => {
  //     setCount(count + 1);
  //   };
    return (
      <div className="conatiner">
   
        <div >
        <Stack spacing={2} direction="row" style={{    justifyContent: "center",marginTop:30,marginBottom:10}}>
          <Button variant="contained" onClick={()=>{console.log('test')}} >click to start recording</Button>
          <Button variant="contained" onClick={() => props.handleStop()} >stop and replay</Button>
          <Button variant="contained" onClick={() => props.handleCount()}> test count `{props.count + 1}` </Button>
          <TextField variant="filled" color="success"  type="password" />
        </Stack>

  
  </div>
  {/* <Link to={'/contact'}>Contact</Link> */}
<div>
  <Contactus />
</div>

        {/* <Player events={displayEvents} /> */}
      </div>
    );
  };

export default PlainMenu