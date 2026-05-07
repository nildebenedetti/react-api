import { useState } from "react";
import { useEffect } from "react";



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

  const clickHandler = () => {
    // richiamo la variabile salvata in getActressessData
    // e salvo i dati in actressesData
    getActressesData()
      .then(data => {
        console.log(data);
        setActressesData(data);
      });

  }

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
    <button onClick={clickHandler}> scarica</button>
  </div>
    ;
}
export default App;

/**       // adesso che li ho, devo settare lo stato mettendo 
        const filteredData = data.map(actress => {
          // colleziono i dati che mi servono
          id = actress.id
          fullName = actress.name
          birthYear = actress.birth_year
          bio = actress.biography
          img = actress.image
          awards = [awards]
        }) */