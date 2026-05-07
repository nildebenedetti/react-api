

function App() {

  const API_URL = 'https://lanciweb.github.io/demo/api/actresses/';

  fetch(API_URL)
    .then (response => {
      return response.json();
    })
    .then (data => 
      console.log(data),
    )
    .catch (error =>
      console.error('probleminooo',error)
    );

  return <div>

  </div>
  ;
}
export default App;
