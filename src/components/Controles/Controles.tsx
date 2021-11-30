import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';


export const Controles = () => {

  const [socket, setSocket]: any = useState();


  useEffect(() => {
    const s: any = io('http://localhost:3001');
    setSocket(s);

    return () => {
      s.disconnect();
    }
  }, []) 



    return (
        <div className="controles">
            <button 
                className="play"
                onClick={ clickPlay(socket) }
            >Play</button>
            
        </div>
    )
};

const clickPlay = (socket: any): any => {
    socket.on('click-event', () => {
        console.log('Play-Button clicked');
    })
}
