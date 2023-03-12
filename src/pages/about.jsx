import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../style/about.css'

function About(){
    const [about, setAbout] = useState({})
    const [origin, setOrigin] = useState({})
    const params = useParams()
    const navigate = useNavigate()
    async function getById(id){
        const response = await axios.get('https://rickandmortyapi.com/api/character/'+id)
        setAbout(response.data)
        const fetch = await axios.get(`${response.data.origin.url}`)
        setOrigin(fetch.data)
        console.log(response.data)
    }
    useEffect(()=>{
        getById(params.id)
        
    },[])
     
    return(
        <div className="about">
            <button className="btn" onClick={()=> navigate('/characters')}>Go back</button>
            <img className="img" src={about.image} alt={about.name}/>
            <h1 className="h1">{about.name}</h1>
            <p className="informations">Informations</p>
            <div className="details">
                <p className="p1">Gender</p>
                <p className="p2">{about.gender}</p>
                <hr></hr>
                <p className="p1">Status</p>
                <p className="p2">{about.status}</p>
                <hr></hr>
                <p className="p1">Specie</p>
                <p className="p2">{about.species}</p>
                <hr></hr>
                <p className="p1">Origin</p>
                <p className="p2">{origin.name}</p>
                <hr></hr>
                <p className="p1">Type</p>
                <p className="p2">{about.type || 'unknown'}</p>
                <hr></hr>
              
            </div>
        </div>
    )
}

export default About;