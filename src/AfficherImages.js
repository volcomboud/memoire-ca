import { people } from './data.js';
import React from 'react';


export default function AfficherImages({nbImages}) {
  
  function getRandomInt(max){
    return Math.floor(Math.random()*max); 
  } //getRandomInt

  
    let idx1 = getRandomInt(people.length)
    let idx2 = getRandomInt(people.length)
    let idx3 = getRandomInt(people.length)
    let idx4 = getRandomInt(people.length)
    let idx5 = getRandomInt(people.length)
    let idx6 = getRandomInt(people.length)
    let idx7 = getRandomInt(people.length)
    let idx8 = getRandomInt(people.length)
    let idx9 = getRandomInt(people.length)

    let randomScientist
    
    let nbDImagesAAfficher = {nbImages};
    
    if (nbDImagesAAfficher ===3 ){
    randomScientist = people.filter(p =>
      p.id === idx1 || p.id === idx2 || p.id === idx3
    );
  } else if (nbDImagesAAfficher ===6 ){
    randomScientist = people.filter(p =>
      p.id === idx1 || p.id === idx2 || p.id === idx3 ||  p.id === idx4 || p.id === idx5 || p.id === idx6
    );
  } else {
    randomScientist = people.filter(p =>
      p.id === idx1 || p.id === idx2 || p.id === idx3 ||  p.id === idx4 || p.id === idx5 || p.id === idx6 || p.id === idx7 || p.id === idx8 || p.id === idx9 
    );
  }


  const listItems = randomScientist.map(person =>
            <>
                        <img
                          src={person.imageId}
                          alt={person.name}
                          height={100}
                        />
            </>
  );
  return (
  <> 
  <ul>{listItems}</ul>
    </> 
    )
  
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
