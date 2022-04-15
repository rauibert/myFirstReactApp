import {useState, useEffect} from "react";
import * as API from "./services/swpeople";
import logo from "./assets/logo.png";
import { Heading } from '@chakra-ui/react';
import { PersonItem } from "./components/PersonItem";
import { Routes, Route } from "react-router-dom";


export default function App() {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    API.getAllPeople().then(setPeople);
  }, []);


  return (
  <>
    <img src={logo} width="200"/>
    <Heading as="h1" size="2xl">Personajes de Star Wars</Heading>
    <section>
      {people.map((person) => (
        <PersonItem key={person.name} {...person} />
      ))}
    </section>

  </>
  
  );  
}


