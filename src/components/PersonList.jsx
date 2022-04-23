import {useState, useEffect} from "react";
import { Heading } from '@chakra-ui/react';
import { PersonItem } from "./PersonItem";
import * as API from "../services/swpeople";

export function PersonList(){
    
    const [people, setPeople] = useState([]);

    useEffect(()=>{
      API.getAllPeople().then(setPeople);
    }, []);
    
    return (
        <>
            
            <Heading as="h1" size="2xl">Personajes de Star Wars</Heading>
                
            <section>
                {people.map((person) => (
                    <PersonItem key={person.name} {...person} />
                ))}
            </section>
        </>
    )
    
}


 