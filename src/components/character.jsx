import React from "react";
import {useNavigate} from 'react-router-dom'

export function Character({character}){
  const navigate = useNavigate()
 
    return(
        <div 
          className="character" 
          onClick={() => navigate(`/characters/${character.id}`) }>
            <img className="image" src= {character.image} alt={character.name}/>
            <p className="name">{character.name}</p>
            <p className="species">{character.species}</p>
        </div>
    )
}