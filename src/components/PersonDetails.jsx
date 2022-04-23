import { useParams } from "react-router-dom";
import * as API from "../services/swpeople";
import {useState, useEffect} from "react";

export function PersonDetails(){
    const {peopleid} = useParams();

    const [people, setPeople] = useState([]);

    useEffect(()=>{
        API.getPeopleById(peopleid)
        .then(setPeople)
        .catch(console.log);
    }, [peopleid]);
    
    return (
        
        <div>
            <pre>{JSON.stringify(people)}</pre>
        </div>
    )
}