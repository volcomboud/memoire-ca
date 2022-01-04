import { useState } from 'react';
import { people } from './data.js';

export default function RandomCallout() {
   // const [isActive, setIsActive] = useState(false);
    

    function getRandomInt(max){
        return Math.floor(Math.random()*max); 
      }
      let idx1 = getRandomInt(people.length)

      
         const randomCallOut = people.filter( person => 
            person.id === idx1
            );
         
         const calledOut = randomCallOut.map(person => 
            
            <h1> {person.name}  </h1>
            
            );
    
    return ( 
            <p>  {calledOut}  </p>
    );
}