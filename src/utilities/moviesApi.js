import App from "../App/App";

 const grabAPI = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

export default grabAPI;