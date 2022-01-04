import {useState} from 'react';
import Pratique from './Pratique.js'
import AfficherImages from './AfficherImages.js'
import RandomCallout from './RandomCallout.js';
import { people } from './data.js';
import GuessCorrect from './GuessCorrect.js';

export default function App(){

  const guess = people.filter(p=>p.name)


  return(
    <>
    <Pratique/>
    <RandomCallout/>
    <AfficherImages onClick={guess}/>
    <GuessCorrect/>
    </>
  );
}

