import React, { useState, useRef, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import PlainMenu from "./PlainMenu";
import Routing from "./Routing";
import Contactus from "./Contactus";
import Header from "./Header";
import * as rrweb from "rrweb";
import Player from "./Player";





function App() {
  const [stopFn, setStopFn] = useState()
  const [events, setEvents] = useState([])
  const [displayEvents, setDisplayEvents] = useState([])

  const [count, setCount] = useState(0);

  const handleClick = () => {
    let rrwebHandler = rrweb.record({
      emit(event) {
     
        setEvents(events => [...events, event])
        console.log("####:", events.length, ", ", event);
      },
    });
    setStopFn(() => rrwebHandler)
  };
 useEffect(()=>{
  if( navigator.userAgent){
    handleClick() 
  }else {
    setStopFn(undefined)
  }

},[])
// console.log(navigator.userAgent)
  const handleStop = () => {
    if (stopFn) {
      // stopFn();
      setStopFn(undefined)
    }
    console.log(events);
    if (events.length < 2) {
      console.log("it needs more than 2 events to play");
      return;
    }

    setDisplayEvents(events);
  };

  const handleCount = () => {
    setCount(count + 1);
  };

  
  return (
    <>
    <Router>
    <div className="App">
     <ul className="App-header">
       <li>
         <Link to="/">Home</Link>
       </li>
      
       <li>
         <Link to="/contact">Contact us</Link>
       </li>
     </ul>
     <div>
     <Routes>
          <Route exact path='/' element={< PlainMenu handleClick={handleClick} handleCount={handleCount} handleStop={handleStop} count={count} />}></Route>
         
          <Route exact path='/contact' element={< Contactus />}></Route>
   </Routes>
</div>
   </div>
</Router>

<Player events={displayEvents} />
</>
  );
}

export default App;
