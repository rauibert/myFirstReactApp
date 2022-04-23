import { useParams } from "react-router-dom";
import * as API from "../services/swpeople";
import {useState, useEffect} from "react";
import { Box, Flex, Text } from '@chakra-ui/react';

export function PersonDetails(){
    const {peopleid} = useParams();

    const [people, setPeople] = useState([]);

    useEffect(()=>{
        API.getPeopleById(peopleid)
        .then(setPeople)
        .catch(console.log);
    }, [peopleid]);
    
    return (
        
        <Box 
           
          bg='gray.100' 
          p={4} 
          m={4} 
          borderRadius={5}
        >
          
          <Flex align="center"><Text ml="2">Nombre: {people.name}</Text></Flex> 
          <Flex align="center"><Text ml="2">Fecha nacimiento: {people.birth_year} </Text></Flex> 
          <Flex align="center"><Text ml="2">Altura: {people.height}</Text></Flex> 
          <Flex align="center"><Text ml="2">Peso: {people.mass} </Text></Flex>
          <Flex align="center"><Text ml="2">Color de ojos: {people.eye_color}</Text></Flex> 
          <Flex align="center"><Text ml="2">Color de pelo: {people.hair_color} </Text></Flex>
          
                   
        </Box>
    )
}