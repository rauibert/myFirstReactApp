import {useState, useEffect} from "react";
import * as API from "./services/swpeople";
import logo from "./assets/logo.png";
import { Heading } from '@chakra-ui/react';

export default function App() {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    API.getAllPeople().then(setPeople);
  }, []);


  return (
  <>
    <img src={logo} width="200"/>
    <Heading as="h1">Personajes de Star Wars</Heading>
    <ul>
      {people.map((person) => (
        <li key={person.name}>
        {person.name} {person.birth_year}  
        </li>
      ))}
    </ul>

  </>
  
  );  
}


