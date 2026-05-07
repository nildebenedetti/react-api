import { useState } from "react";
import { useEffect } from "react";



function App() {
  // salvo API URL
  const API_URL = 'https://lanciweb.github.io/demo/api/actresses/';
  // variabile di stato per Actressess data
  const [ActressesData, setActressesData] = [];

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
    getActressesData()
      .then(data => {
        console.log(data);
        // adesso che li ho, devo settare lo stato mettendo 
        // i dati organizzati come voglio io
      });

  }

  return <div>
    <ul>
    </ul>
    <button onClick={clickHandler}> scarica</button>
  </div>
    ;
}
export default App;
