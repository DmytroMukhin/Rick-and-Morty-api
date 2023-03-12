import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

import { Character } from '../components/character'; 
import '../style/characters.css'

function Characters() {
  const [characters, setCharacters] = useState([])
  const [sessionQuery, setSessionQuery] =  useState(JSON.parse(sessionStorage.getItem('q')))
 
  const sortedCharacters = useMemo(()=>{
    console.log('session', sessionQuery)
    return characters.filter(character => character.name.toLocaleLowerCase().includes(sessionQuery.toLocaleLowerCase()))
  },[sessionQuery, characters])
  
  async function fetchCharacters(){
    const response = await axios.get('https://rickandmortyapi.com/api/character/[0,1,3,4,5,6,7,9,11]')
    setCharacters(response.data.sort((a,b) => a.name.localeCompare(b.name)))
  }
  
  useEffect(()=>{
    sessionStorage.setItem('q', JSON.stringify(sessionQuery))
  },[sessionQuery])
  
  
  useEffect(() =>{
    fetchCharacters()  
  }, [])

 
  return (
    <div className="container">
      <div className='icon'/>
        <input 
          value={sessionQuery}
          onChange={(e) => setSessionQuery(e.target.value)}
          className='input' 
          type='text' 
          placeholder='filter by name...'
        />
        <div className='characters'>
          {sortedCharacters.map(character => <Character character={character} key={character.id} />)}
        </div>
    </div>
  );
}

export default Characters;
