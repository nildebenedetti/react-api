import { useState } from "react";
import { useEffect } from "react";



function App() {

  const API_URL = 'https://lanciweb.github.io/demo/api/actresses/';

  const [ActressesData, setActressesData] = [];


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
    )};

    const clickHandler = () => {
      console.log('click!');
      getActressesData()
      .then(data => {
        console.log(data);
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
