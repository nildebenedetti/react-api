import { useState } from "react";
import { useEffect } from "react";
import Card from "./components/Card";
import "./styles/index.css";
import Header from "./components/Header";


function App() {
  // salvo API URL
  const API_URL = 'https://lanciweb.github.io/demo/api/actresses/';
  // ora per i boys
  const API_URL_1 = 'https://lanciweb.github.io/demo/api/actors/';
  // variabile di stato per Actressess data
  const [actressesData, setActressesData] = useState([]);
  // variabile di stato per i boys
  const [actorsData, setActorsData] = useState([]);
  // funzione per creare fetch dei dati 
  const [allActorsData, setAllActorsData] = useState([]);
  const getImportedData = (url) => {
    return fetch(url)
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
    // qui chiamero le due funzioni con APIURL
    // Promise.all esegue entrambe le chiamate contemporaneamente
    // e aspetta che siano finite ENTRAMBE
    Promise.all([
      getImportedData(API_URL),   // Prima chiamata
      getImportedData(API_URL_1)  // Seconda chiamata
    ])
    .then(([dataActresses, dataActors]) => {
      // 1. Aggiungo il genere "Donna" a ogni attrice
      const actressesWithGender = dataActresses.map(item => ({
        ...item,
        gender: 'donna'
      }));
      // 2. Aggiungo il genere "Uomo" a ogni attore
      const actorsWithGender = dataActors.map(item => ({
        ...item,
        gender: 'uomo'
      }));
      // 3. Aggiorni gli stati singoli con i dati arricchiti
      setActressesData(actressesWithGender);
      setActorsData(actorsWithGender);
      // 4. Creo l'unione dei due array
      const combinedData = [...actressesWithGender, ...actorsWithGender];
      // 5. Aggiorno lo stato globale
      setAllActorsData(combinedData);
    })
      .catch(err => console.error("Errore nel caricamento dati:", err));
  },
    []);

  // 

  return <div>
    <Header />
    <div className="container mx-auto">
      <div className="row row-cols-4 gap-2">
        {allActorsData.map(actor => {
          // dichiarazioni delle costanti
          const id = actor.id;
          const fullName = actor.name;
          const birthYear = actor.birth_year;
          const bio = actor.biography;
          const img = actor.image;
          const awards = actor.awards.join(', ');
          // mi stampo direttamente una card con i dati
          //  di ogni attrice come da richiesta consegna
          return <Card
            key={id}
            img={img}
            fullName={fullName}
            birthYear={birthYear}
            bio={bio}
            awards={awards}
          />
        })}
      </div>
    </div>
  </div>
    ;
}
export default App;
