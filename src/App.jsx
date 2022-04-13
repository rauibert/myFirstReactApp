import {useState, useEffect} from "react";
import * as API from "./services/swpeople";
import logo from "./assets/logo.png";
import { Heading } from '@chakra-ui/react';
import { PeopleItem } from "./components/PeopleItem";

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
        <PeopleItem key={person.name}{...people} />
      ))}
    </section>

  </>
  
  );  
}


