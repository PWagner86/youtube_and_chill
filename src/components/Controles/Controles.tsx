import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';


export const Controles = () => {

  const [socket, setSocket]: any = useState();

  useEffect(() => {
    const s: Socket = io('http://localhost:3001');
    setSocket(s); 
    s.on('connect', () => {
      console.log(s.io.opts.hostname, s.io.opts.port);
    })

    // s.on('hello', arg => {
    //   console.log(arg);
    // })

    return () => {
      s.disconnect();
    }
  }, []) 

  const clickPlay = () => {
    socket.emit('click-event', 'Play-Button clicked');
  }  
  

  return (
      <div className="controles">
          <button 
              className="play"
              onClick={ clickPlay }
          >Play</button>
          
      </div>
  )

};








