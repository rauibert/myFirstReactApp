import { PersonList } from "./components/PersonList";
import { PersonDetails} from "./components/PersonDetails"
import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";


export default function App() {
 


  return (
  <>
    <img src={logo} width="200"/>
    <Routes>
        <Route path="/" element={<PersonList />} />
        <Route path="people/:id" element={<PersonDetails />} />
    </Routes>   
    
  </>
  
  );  
}


