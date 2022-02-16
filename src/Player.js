import React, { useState, useRef, useEffect, useCallback } from "react";
import rrwebPlayer, { RRwebPlayerOptions } from "rrweb-player";

import "rrweb-player/dist/style.css";
const Player = ({ events }) => {
    const [replayer, setReplayer] = useState();
    const wrapper = useRef();
    useEffect(() => {
      if (events.length > 1) {
  
    const replayers =     new rrwebPlayer({
          target: document.body, 
          props: {
            events : events,
          },
        });
        setReplayer(replayers)
   
      }
    }, [events]);
  
    // if (events.length < 2) {
    //   return <p>Loading...</p>;
    // }
  
    return <div  />;
  };
  export default Player