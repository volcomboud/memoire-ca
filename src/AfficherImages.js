import { people } from './data.js';
import React from 'react'

export default function AfficherImages() {
  
  function getRandomInt(max){
    return Math.floor(Math.random()*max); 
  } //getRandomInt

    let idx = getRandomInt(people.length)
 
    const randomScientist = people.filter(p =>
      p.id === idx
    );

  const listItems = randomScientist.map(person =>
            <>
                        <img
                          src={person.imageId}
                          alt={person.name}
                          height={100}
                        />
            </>

  );
  return <ul>{listItems}</ul>;
  
} //AfficherImages



// const listItems = people.map(person =>
//   <div key={person.id}>
//     <img
//       src={person.imageId}
//       alt={person.name}
//       height={100}
//     />
//   </div>
// );
// return <ul>{listItems}</ul>;
