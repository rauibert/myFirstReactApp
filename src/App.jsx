import {useState, useEffect} from "react";
import * as API from "./services/swpeople";

export default function App() {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    API.getAllPeople().then(setPeople);
  }, []);


  return (
  <>
    <h1>Personajes de Star Wars</h1>
    <ul>
      {people.map((person, i) => (
        <li key={i}>
        {person.name} {person.birth_year}  
        </li>
      ))}
    </ul>

  </>
  
  );  
}


