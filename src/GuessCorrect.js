import { people } from "./data";
import RandomCallout from "./RandomCallout";

export default function GuessCorrect ({guess}) {



  

    return (
         guess === <RandomCallout/> ? <h2>Well Done! </h2>: 'Try Again!' 

    );
}