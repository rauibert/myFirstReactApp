import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { GoPerson, GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";

export function PersonItem(person){
    return (
        <Box 
           
          bg='gray.100' 
          p={4} 
          m={4} 
          borderRadius={5}
        >
          
          <Flex align="center"><GoPerson /><Text ml="2">Nombre: {person.name}</Text></Flex> 
          <Flex align="center"><GoCalendar /><Text ml="2">Fecha nacimiento: {person.birth_year} </Text></Flex> 
          <Link to={`/people/${person.name}`}>
            <Button colorScheme='teal' size='sm'> Más detalles</Button> 
          </Link>
                   
        </Box>
    )
}