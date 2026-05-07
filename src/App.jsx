import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";


function App() {
      // salvo API URL
    const API_URL = 'https://lanciweb.github.io/demo/api/actresses/';
    // variabile di stato per Actressess data
    const [actressesData, setActressesData] = useState([]);

    // funzione per creare fetch dei dati
    const getActressesData = () => {
      return fetch(API_URL)
        .then(response => {
          return response.json();
        })
        .then(json => {
          const data = json;
          return data;
        })
        .catch(error =>
          console.error('probleminooo', error)
        )
    };

  useEffect(() => {

    getActressesData()
      .then(data => {
        console.log(data);
        setActressesData(data);
      });
  },
  []);

  return <div>
    <ul>
      {actressesData.map(actress => {
        // dichiarazioni delle costanti
        const id = actress.id;
        const fullName = actress.name;
        const birthYear = actress.birth_year;
        const bio = actress.biography;
        const img = actress.image;
        const awards = actress.awards.join(', ');
        // mi stampo i dati di ogni attrice come da richiestaconsegna
        return <li key={actress.id}>
          {id},
          {fullName},
          {birthYear},
          {bio},
          {img},
          {awards}
        </li>
      })}
    </ul>
    <Card/>
  </div>
    ;
}
export default App;
