import {useState, useEffect} from "react";
import * as API from "./services/swpeople";
import logo from "./assets/logo.png";
import { Heading, Box, Flex, Text } from '@chakra-ui/react';
import { GoPerson, GoCalendar } from "react-icons/go";

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
        <Box 
          key={person.name} 
          bg='gray.100' 
          p={4} 
          m={4} 
          borderRadius={5}
        >
          
          <Flex align="center"><GoPerson /><Text ml="2">Nombre: {person.name}</Text></Flex> 
          <Flex align="center"><GoCalendar /><Text ml="2">Fecha nacimiento: {person.birth_year} </Text></Flex> 
                     
        </Box>
      ))}
    </section>

  </>
  
  );  
}


