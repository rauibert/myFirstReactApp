const API_URL = "https://swapi.dev/api/";

export async function getAllPeople(){
    try{
        const response = await fetch(`${API_URL}/people`);
        const data = await response.json();
        return data.results;  
    } catch (error) {
        console.error(error);
    }    
}

export async function getPeopleById(peopleId){
    try{
        const response = await fetch(`${API_URL}/people/${peopleId}`);
        const data = await response.json();
        return data;  
    } catch (error) {
        console.error(error);
    }
}