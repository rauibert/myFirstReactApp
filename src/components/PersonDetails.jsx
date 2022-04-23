import { useParams } from "react-router-dom";

export function PersonDetails(){
    const params = useParams();
    console.log(params);
    return (
        
        <div>Hola {params.peopleid}</div>
    )
}