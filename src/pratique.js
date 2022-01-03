import {useState} from 'react';
import AfficherImages from './AfficherImages';

export default function Pratique () {
const [nbImages, setNbImages] = useState(3);

    function getRandomInt(max){
        return Math.floor(Math.random()*max); 
      }
      const handleChange = (event) => {
        setNbImages(event.target.value)
      }

return(
    <div>Choisissez un nombre d'images a afficher
    <form  >   
        <select value={nbImages} onChange={handleChange}>  
            <option value="defaut">choisissez dans le menu</option> 
            <option value="3"  > 3 </option> 
            <option value="6"  > 6 </option>
            <option value="9"  > 9 </option>
        </select>
    </form>
    <p>You picked {nbImages}  </p>
    
 
    </div>
);
}
