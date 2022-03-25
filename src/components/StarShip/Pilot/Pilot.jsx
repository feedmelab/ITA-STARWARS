import React, { useEffect, useState } from 'react';
import { PilotCard, PilotImage, PilotText } from './Pilot.styles';

const Pilot = ({dadesPilot} ) => {

return (
  <PilotCard>
    <PilotImage><img className="card-img-top" src={dadesPilot.image}  alt={dadesPilot.name} /></PilotImage>
    <PilotText>
      <p>Name: <span>{dadesPilot.name}</span></p>
      <p>Height: <span>{dadesPilot.name}</span></p>
      <p>Mass: <span>{dadesPilot.mass}</span></p>
      <p>Hair color: <span>{dadesPilot.hair_color}</span></p>
      <p>Skin color: <span>{dadesPilot.skin_color}</span></p>
      <p>Eye color: <span>{dadesPilot.eye_color}</span></p>
      <p>Birth year: <span>{dadesPilot.birth_year}</span></p>
      <p>Gender: <span>{dadesPilot.gender}</span></p>
    </PilotText>
  </PilotCard>
)
}

// "name": "Darth Vader", 
//     "height": "202", 
//     "mass": "136", 
//     "hair_color": "none", 
//     "skin_color": "white", 
//     "eye_color": "yellow", 
//     "birth_year": "41.9BBY", 
//     "gender": "male", 
//     "homeworld": "https://swapi.dev/api/planets/1/", 
//     "films": [
//         "https://swapi.dev/api/films/1/", 
//         "https://swapi.dev/api/films/2/", 
//         "https://swapi.dev/api/films/3/", 
//         "https://swapi.dev/api/films/6/"
//     ], 
export default Pilot;
