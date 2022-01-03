import {useState} from 'react';
import Pratique from './Pratique.js'
import AfficherImages from './AfficherImages.js'
import RandomCallout from './RandomCallout.js';

export default function App(){
  return(
    <>
    <Pratique/>
    <RandomCallout/>
    <AfficherImages/>

    </>
  );
}

