const grabSingleMovieAPI = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (!response.ok) {
        if (response.status >= 500) {
          throw new Error(`${response.status}, no movies here`)
        } else if (response.status === 404) {
          throw new Error(`${response.status}, lol not found`)
        } else {
          throw new Error(`${response.status}, all other things that are fudged`)
        }
      }
      return response.json()
    })
}
export default grabSingleMovieAPI;