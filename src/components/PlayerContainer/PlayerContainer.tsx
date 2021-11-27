import React from 'react';
import { Player } from '../Player/Player';
import { Controles } from '../Controles/Controles';


export const PlayerContainer = () => {
    return (
        <article className="main-container">
            <Player/>
            <Controles/>
        </article>
            
        
    )
}
